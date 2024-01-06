const http = require('http');

const hostname = '0.0.0.0';
const port = 9000;

const server = http.createServer((req, res) => {
  console.log(`Request URL: ${req.url}`);
  console.log(`Request method: ${req.method}`);
  
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Shashank - V1!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
