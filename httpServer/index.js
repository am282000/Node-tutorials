const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.end("Welcome to your own web server.");
});

server.listen(7777, "127.0.0.1", () => {
  console.log("Litening to port no 7777.....");
});
