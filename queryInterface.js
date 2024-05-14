// queryInterface.js

const fs = require('fs');
const readline = require('readline');
const path = require('path');

// Function to search logs based on filters
// Function to search logs based on filters
function searchLogs(filters, logFiles) {
    const results = [];
    logFiles.forEach(logFile => {
        const filePath = path.join(__dirname, logFile);
        if (fs.existsSync(filePath)) {
            const fileStream = fs.createReadStream(filePath);
            const rl = readline.createInterface({
                input: fileStream,
                crlfDelay: Infinity
            });

            rl.on('line', (line) => {
                
                const log = JSON.parse(line);
                console.log('Processing log:', log); // Debugging statement
                if (matchesFilters(log, filters)) {
                    results.push(log);
                }
            });
        } else {
            console.warn(`Log file ${logFile} not found.`);
        }
    });

    return results;
}


// Function to check if a log matches the given filters
function matchesFilters(log, filters) {
    for (const key in filters) {
        if (filters.hasOwnProperty(key)) {
            if (typeof filters[key] === 'object') {
                // For nested objects (e.g., metadata)
                for (const subKey in filters[key]) {
                    if (filters[key].hasOwnProperty(subKey)) {
                        if (log[key][subKey] !== filters[key][subKey]) {
                            return false;
                        }
                    }
                }
            } else {
                if (log[key] !== filters[key]) {
                    return false;
                }
            }
        }
    }
    return true;
}

// Function to display search results
function displayResults(results) {
    if (results.length > 0) {
        console.log('Search Results:');
        results.forEach((log, index) => {
            console.log(`${index + 1}. ${JSON.stringify(log)}`);
        });
    } else {
        console.log('No matching logs found.');
    }
}

// Example usage: Perform a sample search
const filters = {
    level: 'error',
    log_string: 'Failed to connect',
    metadata: {
        source: 'api2.log'
    },
    timestamp: {
        $gte: new Date('2023-09-10T00:00:00Z'), // Greater than or equal to
        $lte: new Date('2023-09-15T23:59:59Z')  // Less than or equal to
    }
};

const logFiles = ['api1.log', 'api2.log', 'api3.log'];
const searchResults = searchLogs(filters, logFiles);
displayResults(searchResults);
