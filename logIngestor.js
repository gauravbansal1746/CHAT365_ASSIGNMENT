const fs = require('fs');
const path = require('path');

// Simulated API integrations
function api1() {
    const logData = {
        level: 'info',
        log_string: 'API Call: GET /users',
        timestamp: new Date().toISOString(),
        metadata: {
            source: 'api1.log'
        }
    };
    writeToLogFile(logData, 'api1.log');
}

function api2() {
    const logData = {
        level: 'error',
        log_string: 'Failed to connect to database',
        timestamp: new Date().toISOString(),
        metadata: {
            source: 'api2.log'
        }
    };
    writeToLogFile(logData, 'api2.log');
}

function api3() {
    const logData = {
        level: 'info',
        log_string: 'User registration successful',
        timestamp: new Date().toISOString(),
        metadata: {
            source: 'api3.log'
        }
    };
    writeToLogFile(logData, 'api3.log');
}

// Function to write log to file
function writeToLogFile(logData, logFilePath) {
    try {
        // Convert logData to JSON string
        const logString = JSON.stringify(logData);
        // Append log to file
        fs.appendFileSync(logFilePath, logString + '\n');
        console.log('Log written successfully.');
    } catch (error) {
        console.error('Error writing log:', error);
    }
}

// Example usage: Simulate API calls
api1();
api2();
api3();
