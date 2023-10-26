// const User = {
//     name: "Daniel",
//     email: "danielalmeida@gmail.com",
//     isActive: true,
// }

// function createUser({name: string, isPaid: boolean}) {}

// let newUser = {name: "Daniel", isPaid: false, email: 'danielalmeida@gmail.com'}
// createUser(newUser);

// function createCourse():{name: string, price: number} {
//     return {name: "typescript course", price: 0}
// }





// type User = {
//     name: string;
//     email: string;
//     isActive: boolean;
// }

// function createUser(user: User): User {
//     return {name: '', email: '', isActive: true}
// }

// createUser({
//     name: "",
//     email: "",
//     isActive: true
// })




type User = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    creditcardDetails?: number,
}

let myUser: User = {
    _id: '123',
    name: 'Daniel',
    email: 'daniel@email',
    isActive: false
}

type cardNumber = {
    cardNumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}

myUser.email = "danielalmeida@gmail.com"
// myUser._id = "2432"

export {}