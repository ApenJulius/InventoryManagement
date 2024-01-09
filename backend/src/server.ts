import 'reflect-metadata';
import { Database } from './database/app-data-source';
import express, { Application } from 'express';
import { Products } from './database/models/Products';
import { validateQRCode } from './utils/middleware';



Database.initialize().then(() => {
    console.log('Database initialized');
}).catch((err) => {
    console.error('Error initializing database', err);
});

const app: Application = express();
app.use(express.json());
// app.use(validateUser) TODO: Implement this middleware


app.get('/', (req, res) => {
    res.send('Hello world');
});



app.get('/products', async (req, res) => {
    const products = await Database.getRepository(Products);
    console.log(await products.find());
    res.send('Hello world');
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


app.listen(4000, () => {
    console.log('Server listening on port 3000');
});
