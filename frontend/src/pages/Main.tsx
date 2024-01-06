import React from 'react';
import './Main.css';
import Inventory from '../components/Inventory/Inventory';
function Main() {
    return (
        <div className="Main" style={{ display:'flex' }}>
            <Inventory />
        </div>
    );
}

export default Main;
