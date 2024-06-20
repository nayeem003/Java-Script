// Arrays
const myHeros = ["spd","me"]
const myArr = [0,1,2,3,4,5]
// console.log(myArr[0]) // 0
// console.log(myArr[5]) // 5
myArr.push(6)

myArr.unshift(9)
myArr.shift()

//console.log(myArr) // [0, 1, 2, 3, 4]

// console.log(myArr.includes(4));
// console.log(myArr.indexOf(7));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()
// console.log(typeof newArr);

// slice, splice

console.log("A ",myArr);

const myn1 = myArr.slice(1,3)
console.log(myArr);
console.log("B ",myn1);

const myn2 = myArr.splice(1,3)
console.log(myn2);