import React, { useEffect, useRef, useState } from 'react';
import './QRScanner.css';
import { Html5Qrcode, Html5QrcodeResult } from 'html5-qrcode';
import Veil from '../Veil/Veil';
import ProductModule from '../ProductModule/ProductModule';
import { IProduct } from '../../types';

interface IQRScanner {
    onOutsideClick: () => void;
}

const QRScanner: React.FC<IQRScanner> = ({ onOutsideClick }) => { 

    const [scanResult, setScanResult] = useState<IProduct | null>(null);
    const [isScanning, setIsScanning] = useState(false);
    const qrScanner = useRef<Html5Qrcode | null>(null);

    useEffect(() => {
        if (isScanning) return;
        qrScanner.current = new Html5Qrcode('reader');

        const qrCodeErrorCallback = (error:string) => {
            console.log('decodedText FAIL', error);
        };
        const config = { fps: 10, qrbox: { width: 250, height: 250 } };

        qrScanner.current.start({ facingMode: 'environment' }, config, (decodedText: string, result: Html5QrcodeResult) => {
            console.log('decodedText', decodedText);
            console.log('decodedResult', result);
            fetch(`${process.env.REACT_APP_BACKEND}/qrScan`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ qrCode: decodedText })
            }).then((res) => res.json()).then((data) => {
                console.log(data);
                if (data.code !== 200) {
                    alert(data.message);
                    return;
                }
                setScanResult(data.product);
            });
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
        <Veil onOutsideClick={handleOutsideClick}>
            <div id='reader' />
            <h1 id="test">
                THIS IS FOR TESTING : 
                {scanResult ? <ProductModule product={scanResult}/> : 'Scanning...'}
            </h1>
        </Veil>
    );
};

export default QRScanner;
