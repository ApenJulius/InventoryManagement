import React from 'react';
import { Outlet } from 'react-router-dom';
import './SideTab.css';
import QRScanner from '../QRScanner/QRScanner';
import AddProductModal from '../AddProductModal/AddProductModal';

interface IUser {
    name: string;
    role: string;
}

const SideTab: React.FC<IUser> = ({ name, role }) => {
    const [showQR, setShowQR] = React.useState(false);
    const [showAddProduct, setShowAddProduct] = React.useState(false);
    const toggleQR = () => {
        setShowQR(!showQR);
    };
    const toggleAddProduct = () => {
        setShowAddProduct(!showAddProduct);
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
                        Overview
                    </button>
                    <button className='sidebar-button'>
                        History
                    </button>
                    <button className='sidebar-button'>
                        Inventory
                    </button>
                    {
                        showAddProduct ?
                            <AddProductModal onOutsideClick={toggleAddProduct}/>
                            : null

                    }
                    {
                        showQR ?
                            <QRScanner onOutsideClick={toggleQR}/>
                            : null
                    }
                </div>
                <button onClick={toggleAddProduct}>
                        Add Product
                </button>
                <button onClick={toggleQR} className='sidebar-button qr-button'>
                </button>
            </div>

            <Outlet />
        </>
    );
};

export default SideTab;
