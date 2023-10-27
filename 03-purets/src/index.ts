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
    readonly city?: string

    constructor(
        public email: string,
        public name: string,
        // private userId: string
        ){}
}

const daniel = new User("Daniel", "daniel@gmail")
// daniel.city = "sjc"
// daniel.city