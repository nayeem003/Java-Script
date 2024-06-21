// const tinderUser = new Object() // singleton
const tinderUser = {}
 tinderUser.id = "123abc"
tinderUser.name = "ram"
tinderUser.age = 25
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    id: "456def",
    email : "ji@gmail.com",
    fullName:{
        userFullName:{
            firstName:"ji",
            lastName:"ram"
        }
    }
}

// console.log(regularUser.fullName);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj4  ={5:"e",6:"f"}

// const obj3 = Object.assign({},obj1,obj2,obj4)
const obj3 = {...obj1,...obj2,...obj4}
// console.log(obj3);

const user = [
    {
        id:1,
        email:""
    }
]
// console.log(user[0].email);
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));