import React from 'react';
import { IProduct } from '../../types';
import './ProductModule.css';
import Veil from '../Veil/Veil';
import QRCode from 'qrcode.react';
interface IProductModule {
    product: IProduct | null;
    onOutsideClick?: () => void;
}


const ProductModule: React.FC<IProductModule> = ({ product, onOutsideClick }) => {
    const handleOutsideClick = async () => {
        if (onOutsideClick)
            onOutsideClick();
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const updateProduct = async (e: any) => { 
        const action = e.target.name;
        const body: { id: number | undefined; action: string; borrower?: string } = { id: product?.id, action };        if (action === 'BORROW') {
            const borrower = document.getElementById('Borrower-input') as HTMLInputElement;
            if (borrower.value === '') {
                alert('Please enter a borrower');
                return;
            }
            body.borrower = borrower.value;
        }
        console.log(action);
        fetch(`${process.env.REACT_APP_BACKEND}/products/update`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body) })
            .then((res) => res.json()).then((data) => {
                console.log(data);
                if (data.code !== 200) {
                    alert(data.message);
                    return;
                }
                window.location.reload();
                console.log(data);
            });
    };

    
    return ( 
        <Veil onOutsideClick={handleOutsideClick}>
            <div className="product-module-container">
                { 
                    product ? (
                        <>
                            <div style={{ display:'inline-flex' }}>
                                <div style={{ paddingRight:'10px' }}>
                                    <div><span>Id: {product.id}</span></div>
                                    <div><span>Product : {product.name}</span></div>
                                    <div><span>Status : {product.status}</span></div>
                                    <div><span>{product.borrower ? 'Lent to :' + product.borrower : ''}</span></div>
                                    <div><span>{product.lendingDate ?  ('Lent at : ' + new Date(product.lendingDate).toLocaleString()) : ''}</span></div>
                                    <div><span>{product.lendingExpiration ? ('Expiration : ' + new Date(product.lendingExpiration).toLocaleString()) : ''}</span></div>
                                </div>
                                {
                                    product.identifier ? (
                                        <div>
                                            <QRCode value={product.identifier.toString()} />
                                        </div>
                                    ) : (
                                        null
                                    )
                                }
                            </div>
                            <div>
                                <button onClick={updateProduct} name="RETURN">Return</button>
                                <button onClick={updateProduct} name="BORROW">Borrow</button>
                                <button>Edit</button>
                            </div>

                            <div>
                                <input type="text" placeholder="Borrower" id="Borrower-input" />
                            </div>
                        </>
                    ) : (
                        <div><span>Could not find product</span></div>
                    )
                }
            </div>
        </Veil>
    );
};

export default ProductModule;
