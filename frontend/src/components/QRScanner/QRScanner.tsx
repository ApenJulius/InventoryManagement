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
    const qrScanner = useRef<Html5Qrcode | null>(null);

    useEffect(() => {
        if (isScanning) return;
        qrScanner.current = new Html5Qrcode('reader');

        const qrCodeErrorCallback = (error:string) => {
            console.log('decodedText FAIL', error);
        };
        const config = { fps: 10, qrbox: { width: 250, height: 250 } };

        qrScanner.current.start({ facingMode: 'environment' }, config, (decodedText, result) => {
            console.log('decodedText', decodedText);
            console.log('decodedResult', result);
            setScanResult(result);
        }, qrCodeErrorCallback);
        setIsScanning(true);   
    }, [isScanning]);


    const handleOutsideClick = async () => {
        if (qrScanner.current) {
            try {
                await qrScanner.current.stop().then(stopped => console.log('stopped', stopped)).catch((err) => console.log(err));
                setIsScanning(true);
            } catch (err) {
                console.log(err);
            }
        }
        onOutsideClick();
    };
    
    
    return ( 
        <div className='QRScan-veil' onClick={handleOutsideClick}>
            <div className='QRScan-container' onClick={(e) => e.stopPropagation()}>
                <div id='reader' />
                <p id="test">
                    {scanResult ? scanResult : 'Scanning...'}
                </p>
            </div>
        </div>
    );
};

export default QRScanner;
