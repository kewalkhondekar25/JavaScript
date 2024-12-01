//promise object represents the eventual completion or failure of an asynchronous operation and its resulting value.

const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("async one");
    resolve();
  }, 1000);
});

promiseOne.then(() => {
  console.log("async one resolved");
});

//promise two
new Promise((resolve, reject) => {
  setTimeout(() =>{
    console.log("async two");
    resolve({ name: "john", email: "john@gmail.com"})
  }, 2000);
}).then((data) => {
  console.log("async two resolved", data);
});

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("async 3");
    let error = false;
    if(!error){
      resolve({ name: "jack", email: "jack@gmail.com"});
    }else{
      reject("ERROR: Something went wrong");
    };
  }, 3000);
})

//chaining
promiseThree.then((data) => {
  console.log("orignal data: ", data);
  return data.name;
}).then((name) => {
  console.log("chained data: ", name);
}).catch((err) => {
  console.log(err);
});