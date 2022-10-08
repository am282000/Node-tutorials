const fs = require("fs");
const http = require("http");
const server = http.createServer();

/* All file at a time */

// server.on("request", (req, res) => {
//   fs.readFile("input.txt", (err, data) => {
//     if (err) console.log(err);
//     res.end(data.toString());
//   });
// });

/* Stream by stream or chunk by chunk */

// server.on("request", (req, res) => {
//   const rstream = fs.createReadStream("input.txt");
//   rstream.on("data", (chunk) => {
//     res.write(chunk);
//   });
//   rstream.on("end", () => {
//     res.end();
//   });
//   rstream.on("error", (err) => {
//     res.end(`file not found
// ${err}`);
//   });
// });

/* Pipe Method - Best and fast for chunks - Stream pipe means read nd write by chunks */

server.on("request", (req, res) => {
  const rstream = fs.createReadStream("input.txt");
  rstream.pipe(res);
});

server.listen(8000, "127.0.0.1");
