import React, { useEffect, useState } from 'react';
import './QRScanner.css';
import { Html5Qrcode } from 'html5-qrcode';

interface IQRScanner {
    onScan: (result: string) => void;
    onOutideClick: () => void;
}

const QRScanner: React.FC<IQRScanner> = ({ onScan, onOutideClick }) => {
    /*     const [scanResult, setScanResult] = useState(null);
    const qrScanner = new Html5Qrcode('reader');


    const qrCodeSuccessCallback = (decodedText, decodedResult) => {
    };
    const qrCodeErrorCallback = (decodedText, decodedResult) => {
    };
    const config = { fps: 10, qrbox: { width: 250, height: 250 } };
     */
    // If you want to prefer front camera
    //qrScanner.start({ facingMode: 'user' }, config, qrCodeSuccessCallback, qrCodeErrorCallback);
    

    return ( 
        <div className='QRScan-veil' onClick={onOutideClick}>
            <div className='QRScan-container' onClick={(e) => e.stopPropagation()}>
            </div>
        </div>
    );
};

export default QRScanner;
