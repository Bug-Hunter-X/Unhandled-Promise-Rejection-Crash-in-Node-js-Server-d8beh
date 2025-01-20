# Unhandled Promise Rejection in Node.js Server

This repository demonstrates a common error in Node.js applications: unhandled promise rejections leading to server crashes.  The `bug.js` file contains a server that performs an asynchronous operation.  If the operation fails, the rejection is not handled, causing the server to terminate unexpectedly.

The `bugSolution.js` file shows how to correctly handle promise rejections using `.catch()` to prevent crashes and gracefully handle errors.

## How to reproduce the bug

1. Clone this repository.
2. Navigate to the repository directory.
3. Run `node bug.js`.
4. Refresh the page a few times. You will eventually observe the server crashing due to an unhandled promise rejection.  The error message will be logged to the console.

## How to fix the bug

Review the `bugSolution.js` file to see how proper error handling is implemented.  The key is to always use `.catch()` to handle potential rejections in your asynchronous operations.