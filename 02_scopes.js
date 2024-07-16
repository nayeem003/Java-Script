
//var c= 300
let a  =100
if (true) {
    let a = 10
    const b = 20
    // console.log("Inner: ",a);
}





//console.log(a);
//console.log(b);
//console.log(a);

function one(){
    const username = "nayeem"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

//one()

if(true){
    const username = "naueem"
    if(username == "naueem"){
        const website = "youtube"
        // console.log(username + website);
    }
    //console.log(website);
}
//console.log(username);


//+++++++++++++++++ interesting ++++++++++++++++++++++++++

console.log(addOne(5));

function addOne(num){
    return num + 1
}


addTwo(5)
const addTwo = function(num){
    return num + 2
}

