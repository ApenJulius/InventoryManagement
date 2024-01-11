import { ProductStatus } from '../types';

function validateUpdateProduct(id: number, action: ProductStatus): boolean {
    if (!id || !action)
        return true;
    if (!Object.values(ProductStatus).includes(action))
        return true;
    return false;

}


function validateQRCode(qrCode: string): boolean {
    const qrCodeRegex = new RegExp('^[0-9a-z]+$');
    if (!(qrCodeRegex.test(qrCode) && qrCode.length === 25)) 
        return true;
    return false;
}

function validateAddProduct(name:string, amount:number): boolean {
    if (name.length > 0 && (amount > 0 && amount < 100))
        return true;
    return false;
}


export { validateQRCode, validateAddProduct, validateUpdateProduct };
