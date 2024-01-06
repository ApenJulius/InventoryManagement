import { DataSource } from 'typeorm';
export const Database = new DataSource({
    type: 'sqlite',
    database: './db.sqlite',
    logging: true,
    entities: ['dist/database/models/*.js'],
    //migrations: ['./migrations/*.js'],
    subscribers: [],
    synchronize: true,
});
