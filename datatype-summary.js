/*Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
       */

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// MEMORIES
// 1.Stack(Primitive)  2.Heap(Non-Primitive)
 
let myYoutubeName = "Nayeem" // ye stack me jayega or iska ek copy hoga jo change hoga
let anothername = "yash"
console.log(myYoutubeName);
console.log(anothername);

// heap me refrence milta hai matlab jab changes hota hai vo original values me hota hai
