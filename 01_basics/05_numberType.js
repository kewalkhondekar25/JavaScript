//isNAN

const age = 26;

if(isNaN(age)){
  console.log("age is invalid");
}else{
  console.log("age is valid");
}

//parseInt

const numberInString = "26";

console.log(typeof(numberInString));
console.log(parseInt(numberInString));
console.log(typeof(parseInt(numberInString)));


const a = "10ab";
const b = 20;
console.log(parseInt(a) + b);

const c = "ab10"; //invlid
const d = 20;
console.log(parseInt(c) + d);


