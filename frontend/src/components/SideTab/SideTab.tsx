import React from 'react';
import { Outlet } from 'react-router-dom';
import './SideTab.css';
import QRScanner from '../QRScanner/QRScanner';

interface IUser {
    name: string;
    role: string;
}

const SideTab: React.FC<IUser> = ({ name, role }) => {
    const [showQR, setShowQR] = React.useState(false);

    const toggleQR = () => {
        setShowQR(!showQR);
    };
    // Add your component logic here
    return ( 
        <>
            <div  className='sidetab-container'>
                <div style={{ height:'60px', backgroundColor:'lightblue' }}>
                    {name}
                    <br />
                    {role}
                </div>
                <div className='sidetab-button-container'>
                    <button className='sidebar-button'>
                        overview
                    </button>
                    <button className='sidebar-button'>
                        History
                    </button>
                    <button onClick={toggleQR} className='sidebar-button qr-button'>
                    </button>
                    {
                        showQR ?
                            <QRScanner onOutsideClick={toggleQR} onScan={toggleQR}/>
                            : null
                    }
                </div>
            </div>
            <Outlet />
        </>
    );
};

export default SideTab;
