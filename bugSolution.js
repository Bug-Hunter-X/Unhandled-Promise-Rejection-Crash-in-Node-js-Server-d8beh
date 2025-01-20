const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might fail
  const asyncOperation = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate a random failure
        if (Math.random() < 0.5) {
          reject(new Error('Async operation failed'));
        } else {
          resolve('Async operation succeeded');
        }
      }, 1000);
    });
  };

  asyncOperation()
    .then((result) => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(result);
    })
    .catch((error) => {
      // Handle the error gracefully
      console.error('Error:', error);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
    });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});