import 'reflect-metadata';
import { Database } from './database/app-data-source';
import express, { Application } from 'express';
import { Products } from './database/models/Products';
import { validateQRCode } from './utils/middleware';
import cors from 'cors';

Database.initialize().then(() => {
    console.log('Database initialized');
}).catch((err) => {
    console.error('Error initializing database', err);
});

const app: Application = express();
app.use(express.json());
app.use(cors({ origin: ['http://localhost:3001', 'http://127.0.0.1:3001'] }));
// app.use(validateUser) TODO: Implement this middleware


app.get('/products', async (req, res) => {
    const products = await Database.getRepository(Products).find();
    res.send(products);
});

app.get('/products/:id', async (req, res) => {
    const product = await Database.getRepository(Products).find({ where: { id: Number(req.params.id) } });
    res.send(product);
});

app.post('/qrScan', async (req, res) => {
    if (!validateQRCode(req.body.qrCode)) {
        res.status(400).send('Could not validate QR code');
        return;
    }
    // TODO: Implement this endpoint with returning he product in pop up, or question of creating

});

app.post('/updateProduct', async (req, res) => {
    // TODO: Implement this endpoint with updating the product
});


app.listen(process.env.PORT || 3000, () => {
    console.log(`Server listening on port ${process.env.PORT || 3000}`);
});
