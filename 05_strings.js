const name = "nayeem"
const repoCount = 3

// console.log(name+repoCount+"value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Nayeem-al-cp-com')

// console.log(gameName[0])
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(4));
console.log(gameName.indexOf('y'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-5,4)
console.log(anotherString)

const newStringOne = "       NAYEEM   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://nayeem.com/nayeem%20laheji"

console.log(url.replace('%20','-'));

console.log(gameName.split('-'));