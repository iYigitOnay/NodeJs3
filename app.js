var http = require("http");

var server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write();
    response.end();
  } else if (request.url === "/blog") {
    response.writeHead(200, { "content-type": "text/html" });

    response.end();
  } else {
    response.writeHead(404, { "Content-Type": "text/html" });
    response.write("<h1>404 Not Found</h1>");
    response.end();
  }
});
