 Log Search and Ingestion System

 Description
This project implements a simple log search and ingestion system. It consists of two main components:
- logIngestor.js**: Simulates API calls and writes logs to log files.
- queryInterface.js**: Searches logs based on specified filters.

## Features
 Simulated API integrations.
 Log ingestion and search based on filters like level, log string, timestamp, and metadata source.
 Regular expression support for log string search.
-Date range filtering.
-Real-time log processing.
-Error handling and logging configuration.

## Usage
1. Clone the repository:**
    ```bash
    git clone <repository_url>
    ```

2. Navigate to the project directory:**
    ```bash
    cd log-search-ingestion-system
    ```

3. Install dependencies:**
    ```bash
    npm install
    ```

4. Run the log ingestion script:**
    ```bash
    node logIngestor.js
    ```

5. Run the log search interface:**
    ```bash
    node queryInterface.js
    ```

6. Follow the prompts to search for logs based on filters.**

## Sample Queries
- Find all logs with the level set to "error".
- Search for logs with the message containing the term "Failed to connect".
- Filter logs between the timestamp "2023-09-10T00:00:00Z" and "2023-09-15T23:59:59Z".