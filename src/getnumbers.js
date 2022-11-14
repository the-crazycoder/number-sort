const rl = require("readline-sync");
const colors = require("./textcolors");

console.log(`${colors.FgBlue} You will now be asked to input 5 numbers`);

const number1 = rl.question(`${colors.FgRed}${colors.FgRed}Please enter a number: `);
const number2 = rl.question(`${colors.FgRed}Please enter a number: `);
const number3 = rl.question(`${colors.FgRed}Please enter a number: `);
const number4 = rl.question(`${colors.FgRed}Please enter a number: `);
const number5 = rl.question(`${colors.FgRed}Please enter a number: `);

const numbers = [number1,number2,number3,number4,number5];

module.exports = numbers
