const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("async one");
    let error = false;
    if(!error){
      resolve({ id: 1, name: "max", email: "max@f1.com"});
    }else{
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

const handlePromiseOne = async () => {
  try {
    const response = await promiseOne;
    console.log(response);
    console.log("async one resolved");
  } catch (error) {
    console.log(error);
  }
};

handlePromiseOne();

//using fetch
fetch("https://fakestoreapi.com/products")
.then((response) => {
  return response.json();
})
.then((data) => {
  console.log("using fetch", data);
}).catch((err) => {
  console.log(err);
});

const getFakeStoreApiData = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log("using async await", data);
  } catch (error) {
    console.log(error);
  }
};
getFakeStoreApiData();