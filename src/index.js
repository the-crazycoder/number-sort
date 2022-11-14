const color = require('./textcolors');

console.log(`${color.FgMagenta} ${color.Blink} Number sort | Thomas Mead | MIT 2022`)

const sort = require('./sort')
const numbers = require('./getnumbers');


console.log(`${color.FgBlue}Sorting numbers...`);

const sorted = sort(numbers);
console.log(`${color.FgRed}Sorting COMPLETE! Printing output`);
console.log(``);

console.log(`${color.FgMagenta}${sorted[0]}`);
console.log(`${sorted[1]}`);
console.log(`${sorted[2]}`);
console.log(`${sorted[3]}`);
console.log(`${sorted[4]}`);

console.log(color.Reset)