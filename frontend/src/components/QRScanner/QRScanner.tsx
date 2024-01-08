import React, { useEffect, useRef, useState } from 'react';
import './QRScanner.css';
import { Html5Qrcode } from 'html5-qrcode';

interface IQRScanner {
    onScan: (result: string) => void;
    onOutsideClick: () => void;

}
const QRScanner: React.FC<IQRScanner> = ({ onScan, onOutsideClick }) => {

    const [scanResult, setScanResult] = useState(null);
    const [isScanning, setIsScanning] = useState(false);
    const qrScanner = useRef(null);

    console.log(qrScanner, ' 1');
    useEffect(() => {
        if (isScanning) return;
        qrScanner.current = new Html5Qrcode('reader');

        console.log(qrScanner.current, ' 2');

        const qrCodeSuccessCallback = (decodedText, decodedResult) => {
        };
        const qrCodeErrorCallback = (decodedText, decodedResult) => {
        };
        const config = { fps: 10, qrbox: { width: 250, height: 250 } };

        qrScanner.current.start({ facingMode: 'user' }, config, qrCodeSuccessCallback, qrCodeErrorCallback);
        setIsScanning(true);   
    }, [isScanning]);


    const handleOutsideClick = async () => {
        console.log(qrScanner.current, ' 3');
        if (qrScanner.current) {
            await qrScanner.current.stop().then(stopped => console.log('stopped', stopped)).catch((err) => console.log(err));
            setIsScanning(true);
        }
        onOutsideClick();
    };
    
    
    return ( 
        <div className='QRScan-veil' onClick={handleOutsideClick}>
            <div className='QRScan-container' onClick={(e) => e.stopPropagation()}>
                <div id='reader' />
            </div>
        </div>
    );
};

export default QRScanner;
