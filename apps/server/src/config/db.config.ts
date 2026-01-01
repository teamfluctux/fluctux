type DBConfigType = {
    DATABASE_URL_1: string
}

export const DBConfig: DBConfigType = {
    DATABASE_URL_1: process.env.DATABASE_URL_1 as string,
}