"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    // return num + 2;
    return "hello";
}
;
function getUpper(val) {
    return val.toUpperCase();
}
;
function signUpUser(name, email, isPaid) { }
;
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
var myValue = addTwo(5);
console.log(myValue);
getUpper('upper word');
signUpUser("Daniel", "danielalmeida@gmail.com", false);
loginUser("Daniel", "danielalmeida@gmail.com");
