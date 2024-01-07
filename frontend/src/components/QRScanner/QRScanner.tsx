import React, { useEffect, useState } from 'react';
import './QRScanner.css';
import { Html5QrcodeScanner } from 'html5-qrcode';


const QRScanner: React.FC = () => {
    const [scanResult, setScanResult] = useState(null);

    useEffect(() => {
        const qrScanner = new Html5QrcodeScanner('reader', { 
            fps: 10, 
            qrbox: { 
                width: 250, 
                height: 250 
            } 
        },
        false);
        qrScanner.render(success, error);

        function success(result) {
            qrScanner.clear();
            setScanResult(result);
            console.log('success');
        }
        function error(err: any) {
            console.error(err);
        }


    }, []);

    return ( 
        <div>
            {scanResult
                ? <p>RESULT: {scanResult}</p>
                : <div id="reader">Scan a QR code</div>
            }
        </div>
    );
};

export default QRScanner;
