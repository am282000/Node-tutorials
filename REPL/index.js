const fs = require('fs');
// fs.writeFileSync("read.txt","hello bacho");

fs.writeFileSync("./REPL/read.txt", "hello bacha party");
fs.appendFileSync("./REPL/read.txt", "  I am panda");
fs.appendFileSync("./REPL/read.txt"," I am robo");

const buf_data = fs.readFileSync("./REPL/read.txt");
console.log(buf_data);
const org_data = buf_data.toString();
console.log(org_data);

fs.renameSync('./REPL/read.txt','./REPL/readme.txt');