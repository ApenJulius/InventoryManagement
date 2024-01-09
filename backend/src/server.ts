import 'reflect-metadata';
import { Database } from './database/app-data-source';
import express, { Application } from 'express';
import { Products } from './database/models/Products';
import { validateQRCode } from './middleware';



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
    if (!validateQRCode(req.body.qrCode)) {
        res.status(400).send('Could not validate QR code');
        return;
    }
    const products = await Database.getRepository(Products);

});

app.post('/updateProduct', async (req, res) => {

});




app.listen(4000, () => {
    console.log('Server listening on port 3000');
});
