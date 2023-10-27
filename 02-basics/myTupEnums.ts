// const user: (string | number)[] = [6 ,"Daniel", 1];

let user: [string, number, boolean];
user = ["hc", 342, true];

let rgb: [number, number, number] = [255, 123, 122];

type User = [number, string];
const newUser: User = [124, "daniel@gmail"];

newUser[1] = "nanda@gmail";
newUser.push("true"); // ??????

export {};