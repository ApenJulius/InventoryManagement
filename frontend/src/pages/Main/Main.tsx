import React from 'react';
import './Main.css';
import Inventory from '../../components/Inventory/Inventory';
import SideTab from '../../components/SideTab/SideTab';

function Main() {
    return (
        <div className="Main">
            <SideTab name="Karl Karlsen" role="Admin" />
            <Inventory />

        </div>
    );
}

export default Main;
