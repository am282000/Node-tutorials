/************* Strings ************/

// let myName = "Maddy"; //Single quote
// let myName1 = "Maddyy";
// let myName3 = new String("Madyyy"); // Dont use this

// console.log(myName);
// console.log(myName1);
// console.log(myName3);

/*************Length of a String ************/

// let newName = "Aabra ka daabra";
// console.log(newName.length);

/*************Escape character of a String ************/

// Quote m quote - use back slash i.e. \

// let newName = "Aabra \\ka\\ daabra \"Gilli\" gilli 'chuuu'";
// console.log(newName);

/*************IndexOf of a String ************/

// let myName = "I am Madaan Sahaab Me";
// console.log(myName.indexOf("M", 6));

/*************lastIndexOf of a String ************/
// check from last but take the real index no. from start

// let myName = "I am Madaan Sahaab Me";
// console.log(myName.lastIndexOf("M", 6));

/*************search of a String ************/
// search for a string - but you can't give the starting position .
//  If not found returns -1

// let myName = "I am Madaan Sahaab Me";
// console.log(myName.search("Madaan"));

/*************Extracting Strings************/

/*************Slice a  Strings************/

// slice(start, end);
// start is included , but end is not included
// wont affect the original string
// if end position not given it will automatically take till last - end included
// negative value at end means leave these much characters from the end

// let str = "Apple Banana Mango";
// console.log(str.slice(6, 12));
// console.log(str.slice(6));
// console.log(str.slice(6, -2));
// console.log(str.slice(-5));

// let str =
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dicta ipsum quam ipsa repellat, dolore saepe, deserunt perspiciatis aliquid animi ipsam enim illum. Id eaque ipsam recusandae eligendi molestias nobis a nemo et odio nulla inventore numquam dolor officiis, consectetur soluta in cupiditate, mollitia accusamus nam adipisci ut, ea repellat? Perspiciatis iusto et maxime veritatis enim dolores, nisi beatae ex quaerat, nulla explicabo consectetur architecto reiciendis. Veritatis magnam maxime veniam eum. Cumque quae eveniet inventore, explicabo possimus blanditiis est omnis, fugit laborum repellendus veritatis perferendis?";
// console.log(str.length);
// let newStr = str.slice(0, 280);
// console.log(newStr);
// console.log(newStr.length);

/*************Substring a  Strings************/

// substring(start, end);
// same as slice - but don't accept -ve values
// if yo give -ve than it take 0 to first value like (7,-2) treated as 0 to 7

// let str = "Apple Banana Mango";
// let newStr = str.substring(6, 13);
// console.log(newStr);

// newStr = str.substring(6);
// console.log(newStr);

// newStr = str.substring(7, -2);
// console.log(newStr);

/*************Substr a  Strings************/

// substr(start, length);
// Cant use negative values with (7,-2) but use as only -2.

// let str = "Apple Banana Kiwi";
// let newstr = str.substr(7, 2);
// console.log(newstr);

// newstr = str.substr(7, -2);
// console.log(newstr);

// newstr = str.substr(-4);
// console.log(newstr);

/*************Replace a Strings************/
// .replace('what to find', 'what to replace with')
//only the first occurance
// returns a new string

// let myBioData = "Hi guys I am Ashish";
// console.log(myBioData.replace("Ashish", "Madaan Sahaab"));

/*************Extracting String character************/

/*************charAt of a String ************/

// charAt(position);
// FInd character on basis of index

// let str = "Hello world";
// console.log(str.charAt(6));

/*************charCodeAt of a String ************/

// charcodeAt(position);
// Finds the unicode of a given index

// let str = "Hello World ";
// console.log(str.charCodeAt(0));

/*************FInd the unicode of the last character in a String ************/
// let str = "Helloo World";
// console.log(str.charCodeAt(str.length - 1));

/*************Property access of a String ************/

// property access[]
//  Simply means find a character on any index no

// let myName = "Madaan Sahaab";
// console.log(myName[0]);

/*************toLowerCase,toUpperCase,Concat of a String ************/

// let myName = "Madaan Sahaab";
// let fName = "Ashish";
// let lName = "Madaan";
// console.log(myName.toUpperCase());
// console.log(myName.toLowerCase());
// console.log(fName.concat(lName));
// console.log(fName.concat(" ", lName));
// console.log(fName.concat(" ", "abc", lName));

/*************trim in a String*************/
// it removes the extra whitespaces from both the sides

// let str = "            Hellooo        ji              ";
// console.log(str);
// console.log(str.trim());

/*************Split in a String*************/
// Converting a string into array
// make them elements on the basis of which you split

// let str = "ab, b|bc ,db";
// console.log(str.split(","));
// console.log(str.split(" "));
// console.log(str.split("|"));
// console.log(str.split("b"));
