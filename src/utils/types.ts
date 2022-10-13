export type CreateUserParams = {
    name: string
    email: string
    password: string
}

export type LoginUserParams = {
    email: string
    password: string
}

export type CreateUserCryptoParams = {
    cryptoId: string
    changeObjective: number
    price: number
    layoutName: string
    userId: number
}