import { DataSource } from "typeorm"

export const Database = new DataSource({
    type: 'sqlite',
    url: "./db.sqlite3",
    logging: true,
    entities: ['./models/*.js'],
    //migrations: ['./migrations/*.js'],
    subscribers: [],
})