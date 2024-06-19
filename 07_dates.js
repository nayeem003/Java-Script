// dates

// let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toISOString())
// console.log(myDate.getFullYear())
// console.log(myDate.getMilliseconds())
// console.log(typeof myDate)

 let myCreayedDate = new Date(2024,0,23,5,6)
// console.log(myCreayedDate.toLocaleString());

// let d = new Date("2023-05-04")
// console.log(d.toLocaleString())

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreayedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getTimezoneOffset());

newDate.toLocaleString('default',{
    weekday: 'long',
    year: 'numeric'
})
console.log(newDate);