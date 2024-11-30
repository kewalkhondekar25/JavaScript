//object literals

//symbol
const mysym = Symbol("key1");

const userInfo = {
  name: "john",
  "full name": "john doe",
  [mysym]: "mykey1",
  age: 25,
  email: "john@gmail.com",
  isLoggedIn: false
};

console.log("orignal object: ", userInfo);
console.log(userInfo.name);
console.log(userInfo["full name"]);
console.log(userInfo[mysym]);

userInfo.email = "johndoe@gmail.com";
console.log("new email: ", userInfo.email);

userInfo.greetings = function(){
  console.log("Greetings!!!");
};
console.log("greetings: ", userInfo.greetings());

userInfo.greetings2 = function(){
  console.log(`Greetings!!! ${this.name}`);
};
console.log(userInfo.greetings2());

Object.freeze(userInfo);
userInfo.name = "jhonny";
console.log("freeze name: ", userInfo.name);
