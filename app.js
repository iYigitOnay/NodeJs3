const http = require("http");
const routes = require("./routes");

var server = http.createServer(routes);

server.listen(3000);

console.log("Sunucu 3000 portunda çalışıyor...");
