let score = "69";
console.log(typeof(score));

let newScore = Number(score);
console.log(newScore);//69
console.log(typeof(newScore));//number

let error = "69a";
let newError = Number(error);
console.log(newError);//NAN

let undefinedVal = undefined;
console.log(typeof(undefinedVal));//undefined

let bool = true;
console.log(typeof(bool));
console.log(Number(bool));//1

let val = ""
console.log(Boolean(val));//false
let val2 = "hello"
console.log(Boolean(val2));//true 