// function newfun(){
//     console.log("kjdnvj");
//     console.log("kjdnvj");
//     console.log("kjdnvj");
//     console.log("kjdnvj");
// }
// newfun()
// function add(no1,no2)
// {
//     console.log(no1+no2)
// }
// add(3,4)
const obj={
    name:"prfhiow",
    email:"jdhfn@123.com",
    age:"84"
}
function print(anyobject){
    console.log(`name is ${anyobject.name} email is${anyobject.email}`)
}
print(obj)
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
