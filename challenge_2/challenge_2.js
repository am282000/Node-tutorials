const fs = require("fs");

// fs.mkdir("challenge2", (err)=>{
//   console.log("Folders created");
// });

// fs.writeFile("./challenge2/hello.txt","My name is Madaan Sahaab",(err)=>{
//   console.log("Files Created");
// });

// fs.appendFile("./challenge2/hello.txt"," I am sexcy",(err)=>{
//   console.log("Files appended");
// })

// fs.readFile("./challenge2/hello.txt","utf-8",(err,data)=>{
//   console.log(data);
//   console.log(err);
// })

// fs.rename("./challenge2/hello.txt","./challenge2/helloPanda.txt",(err)=>{
//   console.log("file renamed");
// })

// fs.unlink("./challenge2/helloPanda.txt",(err)=>{
//   console.log("file deleted");
// })

fs.rmdir("./challenge2",(err)=>{
  console.log("FOlder deleted");
})