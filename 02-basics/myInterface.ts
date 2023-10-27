interface User {
    readonly dbId: number
    email: string
    userId: number
    googleId?: string | number
    // startTrail: () => string
    startTrail(): string
    getCoupon(couponName: string, value: number): number
}

interface User {
    githubToken?: string
}

interface Admin extends User {
    role: "admin" | "ta" | "learner"
}

const daniel: Admin = {
    role: "admin",
    dbId: 908,
    githubToken: 'github/danielalmeidafarias',
    email: "daniel@gmail",
    userId: 2341,
    startTrail: () => {
        return "trail started"
    },
    getCoupon: (name: "daniel10", off: 10) => {
        return off
    }
}

export {}