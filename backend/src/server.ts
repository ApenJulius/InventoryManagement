import 'reflect-metadata';
import { Database } from './database/app-data-source';
import express, { Application } from 'express';
import { Products } from './database/models/Products';
import { validateAddProduct, validateQRCode } from './utils/middleware';
import cors from 'cors';
import { ProductStatus } from './types';

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
function generateRandomString(length: number) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) 
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    
    return result;
}
function generateBulkProducts(productName: string, productAmount: number) {
    const products = [];
    
    for (let i = 0; i < productAmount; i++) {
        products.push({ 
            name: productName, 
            identifier: generateRandomString(25), 
            status: ProductStatus.AVAILABLE  }); 
    }
    return products;
}
app.post('/products/add', async (req, res) => {
    const productName: string = req.body.name;
    const productAmount: number = req.body.amount;
    if (!validateAddProduct(productName, productAmount)) {
        res.status(400).send('Could not validate product');
        return;
    }
    const products = generateBulkProducts(productName, productAmount);
    console.log(products);
    await Database.createQueryBuilder().insert().into(Products).values(products).execute();
    return res.status(200).send('Products added');
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server listening on port ${process.env.PORT || 3000}`);
});
