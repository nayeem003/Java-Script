// singleton -> literals se banega to singleton nhi banta hai

// object literals
const mySym = Symbol("key1")

const JsUser = {
    name: "John",
    age: 30,
    [mySym]: "mykey1",
    location : "mumbai",
    email : "nayeem@google.com",
    isLoggedIn : false,
    lastLoginDays:["Monday","saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);

JsUser.email = "nayeem@op.com"
// Object.freeze(JsUser)
JsUser.email = "nayeem@microsoft.com"
// console.log(JsUser.email); // still nayeem@op.com

JsUser.greeting = function(){
    console.log("Hello World");
}
console.log(JsUser.greeting());