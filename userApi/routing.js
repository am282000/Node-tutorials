const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const data = fs.readFileSync(`${__dirname}/userApi.json`, "utf-8");
  const response = JSON.parse(data);

  if (req.url == "/") res.end("Home page");
  else if (req.url == "/about") {
    res.write("About page");
    res.end();
  } else if (req.url == "/contact") {
    res.end("Contact page");
  } else if (req.url == "/userapi") {
    //**** Isme call baar baar jaa rhi thi .. so make it sync ******//
    // fs.readFile(`${__dirname}/userApi.json`, "utf-8", (err, data) => {
    // console.log(data);
    // if (err) throw err;
    // res.end(data);
    // const response = JSON.parse(data);
    // console.log(response);
    res.writeHead(200, { "content-type": "application/json" });
    res.end(response[0].name);
    // });
  } else {
    res.writeHead(404, { "Content-type": "text / html" });
    res.end("<h1> 404 ...Page not found ! </h1>");
  }
});

server.listen(9000, "127.0.0.1", () => {
  console.log("Helooo");
});
