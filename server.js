const http = require("http");

const hostname = "0.0.0.0";
const port = 3123;

const server = http.createServer((req, res) => {
  if (req.url === "/hello") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("The cat in the mask say 'Hello World!'");
  } else if (req.url === "/angel") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Angel cat");
  } else {
    res.statusCode = 404;
    res.end("Not Found");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
