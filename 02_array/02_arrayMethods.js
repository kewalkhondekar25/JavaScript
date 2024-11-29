//array
const arr = [1, 2, 3, 4, 5];
console.log("orignal array: ", arr);


//methods
arr.push(6);
console.log("push array: ", arr);

arr.pop();
console.log("pop array: ", arr);

arr.unshift(0);
console.log("unshift array: ", arr);

arr.shift();
console.log("shift array: ", arr);

console.log("includes: ", arr.includes(69));

console.log("known index: ", arr.indexOf(5));
console.log("unknown index: ", arr.indexOf(6));

//slice
console.log("slice(1, 3)", arr.slice(1, 3));  //array.slice(startIndex, endIndex); 
console.log("slice(-1)", arr.slice(-1));  //startIndex is inclusive & endIndex is exclusive
console.log("slice(-2)", arr.slice(-2));  //logs [4, 5] bcuz no end index provided so extracts till end
console.log("slice(-3, -1)", arr.slice(-3, -1));

console.log("final array: ", arr);

const array = [100, 200, 300, 400, 500];
console.log("orignal array: ", array);

//splice
const spliceArray = array.splice(1, 3); //array.splice(startIndex, deleteCount, ...itemsToAdd);
console.log("spliceArray" ,spliceArray);  //startIndex is inclusive, deleteCount = no. of items to delete
// spliceArray [ 200, 300, 400 ]

/*
const spliceArray = array.splice(1, 0, 600, 700); // Adds 600 and 700 at index 1 without removing anything
console.log("spliceArray" ,spliceArray);  //[]
console.log("final array: ", array);  //[100, 600, 700, 200, 300, 400, 500]
*/

console.log("final array: ", array);


