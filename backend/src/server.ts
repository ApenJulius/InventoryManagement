import { Database } from './database/app-data-source';
import express, { Application } from 'express';
import { Products } from './database/models/Products';
import 'reflect-metadata';

Database.initialize().then(() => {
    console.log('Database initialized');
}).catch((err) => {
    console.error('Error initializing database', err);
});

const app: Application = express();
app.use(express.json());

app.get('/products', async (req, res) => {
    const products = await Database.getRepository(Products);
    console.log(await products.find());
    res.send('Hello world');
});

app.post('/qrScan', async (req, res) => {
    console.log(req.body);
});




app.listen(4000, () => {
    console.log('Server listening on port 3000');
});
