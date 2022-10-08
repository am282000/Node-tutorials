const fs = require("fs");
// fs.writeFile("message.txt","helloo ladies",(err)=>{
//   if(err) throw err;
//   console.log("I am done for today");
//   console.log(err);
// })

// fs.appendFile("message.txt"," I just meant it",(err)=>{
//   console.log("Hurray !!");
// })

fs.readFile("message.txt","utf8",(err,data)=>{
  console.log(err);
  console.log(data);
})