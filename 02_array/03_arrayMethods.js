//concat

const marvelHeros = ["ironman", "captain america", "thor"];
const dcHeros = ["superman", "batman", "flash"];
/*
marvelHeros.push(dcHeros);
console.log(marvelHeros); //[ 'ironman', 'captain america', 'thor', [ 'superman', 'batman', 'flash' ] ]
*/

const allHeros = marvelHeros.concat(dcHeros);
console.log(allHeros);  //[ 'ironman', 'captain america', 'thor', 'superman', 'batman', 'flash' ]

//spread operator
const allNewHeros = [...marvelHeros, ...dcHeros];
console.log(allNewHeros); //[ 'ironman', 'captain america', 'thor', 'superman', 'batman', 'flash' ]

//flat
const num = [1, 2, [3, 4], 5, [6, [7, 8]]];
console.log("numbers: ", num);

const flatNum = num.flat(Infinity);
console.log("flatNum: ", flatNum);

console.log(Array.isArray("john"));
console.log(Array.from("john"));
console.log(Array.isArray({key: "value"})); //[]

const one = 100;
const two = 200;
const three = 300;
console.log(Array.of(one, two, three)); //[ 100, 200, 300 ]
