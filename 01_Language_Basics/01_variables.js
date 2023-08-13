/*VARIABLES*/

//Declaration
var userName;

//Assignment
userName = 'arjun';

//Initialization
var userName = 'arjun';

console.log(userName);

{/*var*/}

// var is function scope variable
function f1(){
    var x;
    x = 10;

    if(x == 10){
        var y = 20;
    }
    console.table([x,y]);
}
f1();

//var allows shadowing
function f2(){
    var a = 101;

    if(a == 101){
        var b = 102;
        //console.log(b);
        var b = 103;
        console.log(b);
    }
}
f2();

//var also allow hoisting in strict mode
// 'use strict'
function f3(){
    a = 70;
    console.log(a);
    var a; //hosting
}
f3();

{/*let*/}

//let is block scope variable
function f4(){
    let userId = 144;

    if(userId == 144){
        let userName2 = 'krishna' //block scope variable
    }   

    //userName2 is block scope var, hence not accessable outside

    //console.table([userId, userName2]);
}
f4();

{/*const*/}

function f5(){
    const userCity = 'pune';

    if(userCity == 'pune'){
        const userState = 'maharashtra';
        //userState = 'gujrat' (invalid)
        console.log(userState);
    }
}
f5();


