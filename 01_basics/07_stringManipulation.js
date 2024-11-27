//charAt()
const a = "apple";

console.log("small: ", a);

const firstWord = a.charAt(0);
const restWord = a.substring(1);
const finalWord = firstWord.toUpperCase() + restWord.toLocaleLowerCase();

console.log("Capitalize: ", finalWord);

