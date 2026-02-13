interface PGDBConfigType {
    HOST: string
    PORT: number
    USERNAME: string
    PASSWORD: string
    DATABASE: string
}

export const PGDBConfig: PGDBConfigType = {
    HOST: process.env.PG_HOST!,
    PORT: Number(process.env.PG_PORT) || 5432,
    USERNAME: process.env.PG_USERNAME!,
    PASSWORD: process.env.PG_PASSWORD!,
    DATABASE: process.env.PG_DATABASE!,
}

export const PGDB_CONNECTION_URI=`postgresql://[${PGDBConfig.USERNAME}]:${PGDBConfig.PASSWORD}@${PGDBConfig.HOST}:${PGDBConfig.PORT}/${PGDBConfig.DATABASE}`