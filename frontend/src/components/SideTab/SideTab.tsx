import React from 'react';
import { Outlet } from 'react-router-dom';
import './SideTab.css';
import QRScanner from '../QRScanner/QRScanner';

interface IUser {
    name: string;
    role: string;
}

const SideTab: React.FC<IUser> = ({ name, role }) => {
    // Add your component logic here
    return ( 
        <>
            <div style={{ display:'flex', width:'180px', position:'absolute', backgroundColor:'grey', flexDirection:'column' }}>
                <div style={{ height:'60px', backgroundColor:'lightblue' }}>
                    {name}
                    <br />
                    {role}
                </div>
                <div style={{ display:'flex', flexDirection:'column', position:'relative' }}>
                    <button className='sidebar-button'>
                        overview
                    </button>
                    <button className='sidebar-button'>
                        History
                    </button>
                    <QRScanner />
                    <button className='sidebar-button qr-button'>
                    </button>
                </div>
            </div>
            <Outlet />
        </>
    );
};

export default SideTab;
