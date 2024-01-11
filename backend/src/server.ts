import 'reflect-metadata';
import { Database } from './database/app-data-source';
import express, { Application } from 'express';
import { Products } from './database/models/Products';
import { validateAddProduct, validateQRCode, validateUpdateProduct } from './utils/middleware';
import cors from 'cors';
import { generateBulkProducts } from './utils/helperFunctions';
import { ProductStatus } from './types';
import { Customers } from './database/models/Customers';

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
    const productsWithBorrowerName = await Database.getRepository(Products)
        .find({ relations: ['borrower'] })
        .then(products => products.map(product => ({
            ...product,
            borrower: product.borrower ? product.borrower.name : null
        })));
    res.send(productsWithBorrowerName);
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

app.post('/products/add', async (req, res) => {
    console.log('Received request to add products');

    const productName: string = req.body.name;
    const productAmount: number = req.body.amount;

    if (!validateAddProduct(productName, productAmount)) {
        res.status(400).send('Could not validate product');
        return;
    }
    try {
        const products = generateBulkProducts(productName, productAmount);
        await Database.createQueryBuilder().insert().into(Products).values(products).execute();   
    } catch (err) {
        return res.status(500).send({ message: 'Error adding products' });
    }
    return res.status(200).send({ message: 'Products added' });
});

app.post('/products/update', async (req, res) => {
    console.log(req.body.id, req.body.action);
    if (!validateUpdateProduct(req.body.id, req.body.action)) {
        res.status(400).send({ message: 'Could not validate product' });
        return;
    }
    if (req.body.action === 'RETURN') {
        await Database.getRepository(Products).update(req.body.id, {
            status: ProductStatus.AVAILABLE,
            borrower: null,
            lendingDate: null,
            lendingExpiration: null,             
        });
        return res.status(200).send({ code: 200, message: 'Product returned' });
    }
    if (req.body.action === 'BORROW') {
        console.log(req.body);
        const borrower = await Database.getRepository(Customers).find({ where: { identifier: (req.body.borrower) } });
        if (borrower.length === 0) 
            return res.status(400).send({ message: 'Customer not found' });
        

        await Database.getRepository(Products).update(req.body.id, {
            status: ProductStatus.BORROWED,
            borrower: borrower[0],
            lendingDate: new Date().toISOString(),
            lendingExpiration: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString(),             
        });
        return res.status(200).send({ code: 200, message: 'Product borrowed' });
    }

});



app.listen(process.env.PORT || 3000, () => {
    console.log(`Server listening on port ${process.env.PORT || 3000}`);
});
