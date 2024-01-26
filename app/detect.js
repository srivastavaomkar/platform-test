// Import the http module
const http = require('http');

// Create a server object
const server = http.createServer((req, res) => {
  // Get the user agent string from the request headers
  const user_agent = req.headers['user-agent'];

  // Write the HTTP response header
  res.writeHead(200, {'Content-Type': 'text/html'});

  // Write the HTML response body
  res.write(`
    <html>
      <head>
        <title>Sample Web Application</title>
      </head>
      <body>
        <h1>Welcome to 2022!</h1>
        <p>Your user agent is: ${user_agent}</p>
      </body>
    </html>
  `);

  // End the response
  res.end();
});

// Listen on port 3000
server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
