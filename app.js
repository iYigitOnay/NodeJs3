var http = require("http");
var fs = require("fs");

var server = http.createServer((request, response) => {
  if (request.url === "/") {
    fs.readFile("index.html", (err, data) =>{}
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write();
    response.end();
  } else if (request.url === "/blog") {
    response.writeHead(200, { "content-type": "text/html" });
    response.write();
    response.end();
  } else {
    response.writeHead(404, { "Content-Type": "text/html" });
    response.write();
    response.end();
  }
});
