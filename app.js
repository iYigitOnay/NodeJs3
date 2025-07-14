var http = require("http");
var fs = require("fs");

var server = http.createServer((request, response) => {
  if (request.url === "/") {
    fs.readFile("index.html", (err, html) => {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(html); // ← HTML içeriğini yaz
      response.end();
    });
  } else if (request.url === "/blog") {
    fs.readFile("blog.html", (error, html) => {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(html);
      response.end();
    });
  } else if (request.url === "/create") {
    fs.readFile("create.html", (error, html) => {
      response.writableHead(200, { "Content-Type": "text/html" });
      response.write(html);
      response.end();
    });
  } else {
    fs.readFile("404.html", (error, html) => {
      response.writeHead(404, { "Content-Type": "text/html" });
      response.write(html);
      response.end();
    });
  }
});

server.listen(3000, () => {
  console.log("Sunucu 3000 portunda çalışıyor...");
});
