




function validateQRCode(qrCode: string): boolean {
    const qrCodeRegex = new RegExp('^[0-9a-z]+$');
    if (!(qrCodeRegex.test(qrCode) && qrCode.length === 25)) 
        return false;
    return true;
}


export { validateQRCode };
