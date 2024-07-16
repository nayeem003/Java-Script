// console.log("N");
// console.log("a");
// console.log("y");
// console.log("e");
// console.log("e");
// console.log("m");

// function sayMyName(){
//     console.log("N");
//     console.log("a");
//     console.log("y");
//     console.log("e");
//     console.log("e");
//     console.log("m");

// }
// sayMyName()

// function addTwoNumbers(number1,number2){
//     console.log(number1 +number2)
// }

// function addTwoNumbers(number1,number2){
    
//     let result  = number1+number2
//     console.log(Nayeem);
//     return result
    
// }

// const result = addTwoNumbers(5,8)
// console.log("Result:", result)

function calculateCartPrice(val1,val2,...num1){
    return num1
}

//console.log(calculateCartPrice(200,400,500,2000));

const user = {
    username : "nayeem",
    price: 9393
}

function handleOject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleOject(user)

handleOject({
    username : "naem",
    price: 93555
})

const myNewArray = [200, 400, 100,3444]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
