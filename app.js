var http = require("http");
var fs = require("fs");

var server = http.createServer((request, response) => {
  if (request.url === "/") {
    fs.readFile("index.html", (err, html) => {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write();
      response.end();
    });
  } else if (request.url === "/blog") {
    fs.readFile("blog.html", (error, html) => {
      response.writeHead(200, { "content-type": "text/html" });
      response.write();
      response.end();
    });
  } else {
    fs.readFile("404.html", (error, html) => {
      response.writeHead(404, { "Content-Type": "text/html" });
      response.write();
      response.end();
    });
  }
});
server.listen(3000, () => {
  console.log("Sunucu 3000 portunda çalışıyor...");
});
