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