const path = require('path');
console.log( path.dirname('C:/Users/ASHISH/Desktop/node practice/PathModule/path.js'));
console.log( path.extname('C:/Users/ASHISH/Desktop/node practice/PathModule/path.js'));
console.log( path.basename('C:/Users/ASHISH/Desktop/node practice/PathModule/path.js'));
console.log(path.parse("C:/Users/ASHISH/Desktop/node practice/PathModule/path.js"));

const myPath = path.parse("C:/Users/ASHISH/Desktop/node practice/PathModule/path.js");
console.log(myPath.name);
console.log(myPath.root);
