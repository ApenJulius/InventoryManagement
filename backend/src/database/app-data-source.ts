import { DataSource } from 'typeorm';
import 'reflect-metadata';
export const Database = new DataSource({
    type: 'sqlite',
    database: './db.sqlite3',
    logging: true,
    entities: ['./models/*.js'],
    //migrations: ['./migrations/*.js'],
    subscribers: [],
    synchronize: true,
});
