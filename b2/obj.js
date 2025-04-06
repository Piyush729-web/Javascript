const mysym=Symbol("key1")
const user={
    name:"piyush",
    [mysym]:"keey1",
    email:"abc@gmail.com",
    address:"greater noida",
    workday:["monday","tuesday"],
    age:18
}
console.log(user["name"])
console.log(user["email"])
console.log(user[mysym]);
user.greeting=function(){
    console.log("hello js user");
}
user.greetingtwo=function(){
    console.log(`hello jsuser ${this.name}`);
}
console.log(user.greeting());
console.log(user.greetingtwo())

