const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") res.end("Home page");
  else if (req.url == "/about") {
    res.write("About page");
    res.end();
  } else if (req.url == "/contact") {
    res.end("Contact page");
  } else {
    res.writeHead(404, { "Content-type": "text / html" });
    res.end("<h1> 404 ...Page not found ! </h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Helooo");
});
