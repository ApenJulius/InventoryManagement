import React from 'react';
import { Outlet } from 'react-router-dom';
const SideTab: React.FC = () => {
    // Add your component logic here
    const user = 'Karl Karlsen';
    const role = 'Admin';
    return ( 
        <>
            <div style={{ display:'flex', width:'180px', position:'absolute', backgroundColor:'grey', flexDirection:'column' }}>
                <div style={{ height:'60px', backgroundColor:'lightblue' }}>
                    {user}
                    <br />
                    {role}
                </div>
                <div style={{ display:'flex', flexDirection:'column', position:'relative' }}>
                    <button style={{ height:'20px', width:'20px' }}>
                    overview
                    </button>
                    <button style={{ height:'20px', width:'20px' }}>
                    History
                    </button>
                    <button style={{ height:'20px', width:'20px', }}>
                    QR SCAN
                    </button>
                </div>
            </div>
            <Outlet />
        </>

    );
};

export default SideTab;
