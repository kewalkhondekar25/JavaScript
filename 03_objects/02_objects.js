//singleton object
const user = new Object();

//non-singleton object
const obj = {}

console.log("user: ", user);
console.log("obj: ", obj);

const userData = {
  name: "john",
  contact: {
    email: "john@gmail.com",
    mobile: {
      personal: 9876543210,
      private: 9988776655
    }
  }
};
console.log(userData.contact.mobile.personal);

const target = {1: "a", 2: "b"};
const source = {3: "c", 4: "d"};

const result = { target, source };
console.log(result); 

const combine = Object.assign({}, target, source);  //(target, ...source)
// console.log("spread: ", {...target, ...source});
console.log(combine);

//get key & values
console.log(Object.keys(userData));
console.log(Object.values(userData));
console.log(userData.hasOwnProperty("likes"));


