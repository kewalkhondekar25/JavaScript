"use strict"; //treats all js code as version

let name = "john";
let age = 26;
let isAdult = true;
let status;

console.table([name, age, isAdult, status]);
/*
┌─────────┬───────────┐
│ (index) │ Values    │
├─────────┼───────────┤
│ 0       │ 'john'    │
│ 1       │ 26        │
│ 2       │ true      │
│ 3       │ undefined │
└─────────┴───────────┘
*/

console.log(`Max: ${Number.MIN_SAFE_INTEGER} \n Min: ${Number.MIN_SAFE_INTEGER}`);

