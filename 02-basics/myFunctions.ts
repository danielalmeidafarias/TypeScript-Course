function addTwo(num: number): number {
    return num + 2;
    // return "hello"
};

function getUpper(val: string) {
    return val.toUpperCase();
};

function signUpUser(name: string, email: string, isPaid: boolean) {};

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};


let myValue = addTwo(5);
 
getUpper('upper word');

signUpUser("Daniel", "danielalmeida@gmail.com", false);

loginUser("Daniel", "danielalmeida@gmail.com");


// function getValue(myVal: number) {
//     if(myVal > 5) {
//         return true;
//     }

//     return "200 OK"
// }

const getHello = (s: string): string => {
    return "Hello"
};

const heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3];

heros.map((hero): string => {
    return `hero is ${hero}`
})

function consoleError(errMsg: string): void{
    console.log(errMsg);
} 

// The never type represents values which are never observed
// In a return type, this means that the function throws an exception or terminates execution
function handleError(errMsg: string): never{
    throw new Error(errMsg);
}   

export {};