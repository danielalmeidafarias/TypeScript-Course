const score: Array<number> = []
const names: Array<string> = []

function identityOne(val: boolean | number): boolean | number {
    return val
}

function identityTwo(val: any): any {
    return val
}

function identityThree<Type>(val: Type): Type {
    return val
}

identityThree(23)
identityThree("daniel")
identityThree(false)

function identityFour<T>(val: T): T {
    return val
}

interface Bootle {
    brand: string,
    type: number
}

identityFour<Bootle>({
    brand: 'asd',
    type: 45
})

function getSearchProducts<T>(products: T[]): T {
    // do some database operations 

    const myIndex = 3
    return products[myIndex]
}

const getMoreSearchProducts = <T,>(products: T[]): T => {
    // do some database operations

    const myIndex = 4
    return products[myIndex]
}

interface Database {
    connection: string,
    username: string,
    password: string
}

function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
    return {
        valOne,
        valTwo
    }
}

// anotherFunction(3, "4")
// anotherFunction(3, 4)
anotherFunction(3, {
    connection: '23',
    password: 'asd',
    username: '235'
})


interface Quiz {
    name: string,
    type: string
}

interface Course {
    name: string,
    author: string,
    subject: string
}

class Sellable<T> {
    public cart: T[] = []
    
    addToCart(product: T) {
        this.cart.push(product)
    }
}
