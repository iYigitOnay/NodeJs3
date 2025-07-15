const fs = require("fs");

const routeHandler = (request, response) => {
  if (request.url === "/") {
    fs.readFile("index.html", (err, html) => {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(html);
      response.end();
    });
  } else if (request.url === "/blog") {
    fs.readFile("blog.html", (error, html) => {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(html);
      response.end();
    });
  } else if (request.url === "/create" && request.method === "POST") {
    const data = [];

    request.on("data", (chunk) => {
      console.log("Gelen veri:", chunk.toString());
      data.push(chunk);
    });

    request.on("end", () => {
      const result = Buffer.concat(data).toString();
      const parseData = result.split("=")[1];
      console.log("Parçalanmış veri:", parseData);
      fs.appendFile("blog.txt", parseData + "\n", (err) => {
        if (err) {
          console.log("Dosyaya yazma hatası:", err);
        } else {
          response.statusCode = 302;
          response.setHeader("Location", "/blog");
          response.end();
        }
      });
    });
  } else if (request.url === "/create") {
    fs.readFile("create.html", (error, html) => {
      response.writeHead(200, { "Content-Type": "text/html" });
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
};

module.exports = routeHandler;
