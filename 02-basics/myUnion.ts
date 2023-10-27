let score: number | string = 33;

score = 44;
score = '55';

type User = {
    name: string;
    id: number;
}

type Admin = {
    username: string;
    id: number;
}

let hitesh: User | Admin = {
    name: 'Hitesh',
    id: 1234,
}

hitesh = {
    username: 'hc',
    id: 3443,
}

// function getDbId(id: number | string) {
//     console.log(`Db id is: ${id}`);
// }

function getDbId(id: number | string) {
    if (typeof(id) === 'string') {
        id.toLowerCase();
    } else if (typeof(id) === 'number') {
        id + 2;
    }
    
}

getDbId(3);
getDbId('3');

// Array

const data: number[] = [1, 2, 3, 4];
const data2: string[] = ["1", "2", "3", "4"];
const data3: (string | number)[] = ["1" ,"2", 3];



let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = 'aisle';