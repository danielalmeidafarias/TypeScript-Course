"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greetings = "Hello Daniel";
var mynum = 6;
// mynum.toLowerCase(); Error: toLowerCase does not exist on type number
// TypeScript take all methods available for the especific type
greetings.toUpperCase();
console.log(greetings);
// number
// let userId: number = 334455.66; // : number is not necessary in this case
var userId = 334455.66;
userId.toFixed();
// boolean
var isLoggedIn = false;
