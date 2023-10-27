"use strict";
// class User {
//     public email: string
//     name: string
//     private readonly city?: string
//     constructor(email: string, name: string) {
//         this.email = email;
//         this.name = name;
//     }
// }
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }
}
const daniel = new User("Daniel", "daniel@gmail");
// daniel.city = "sjc"
// daniel.city
