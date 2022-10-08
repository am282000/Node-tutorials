const chalk = require("chalk");

// console.log(
//   chalk.blue.underline.inverse(
//     "Hello " + chalk.yellow("World") + chalk.red(" !")
//   )
// );
// console.log(chalk.bgRed("mewwwww"));
// console.log(chalk.hex("#DEADED").bold("Hey you"));

const validator = require("validator");
const myMail = validator.isEmail("maddy@gmail.com");
console.log(myMail ? chalk.green.inverse(myMail) : chalk.red.inverse(myMail));
