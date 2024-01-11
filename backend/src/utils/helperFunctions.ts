import { ProductStatus } from '../types';

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

export { generateBulkProducts, generateRandomString };
