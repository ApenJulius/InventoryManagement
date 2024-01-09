import { DataSource } from 'typeorm';
export const Database = new DataSource({
    type: 'sqlite',
    database: './db.sqlite',
    logging: false,
    entities: ['dist/database/models/*.js'],
    //migrations: ['./migrations/*.js'],
    subscribers: [],
    synchronize: true,
});
