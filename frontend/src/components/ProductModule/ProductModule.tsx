import React, { useEffect } from 'react';
import { IProduct } from '../../types';
import './ProductModule.css';
import Veil from '../Veil/Veil';

interface IProductModule {
    initialProduct: IProduct | null;
    onOutsideClick?: () => void;
}


const ProductModule: React.FC<IProductModule> = ({ initialProduct, onOutsideClick }) => {
    const [product, setProduct] = React.useState<IProduct | null>(initialProduct);

    const handleOutsideClick = async () => {
        if (onOutsideClick)
            onOutsideClick();
    };
    
    return ( 
        <Veil onOutsideClick={handleOutsideClick}>
            <div className="product-module-container">
                { 
                    product ? (
                        <>
                            <div><span>Product id: {product.id}</span></div>
                            <div><span>Product : {product.name}</span></div>
                            <div><span>{product.borrower ? 'Lent to :' + product.borrower : ''}</span></div>
                            <div><span>{product.lendingDate ?  ('Lent at : ' + new Date(product.lendingDate).toLocaleString()) : ''}</span></div>
                            <div><span>{product.expiration ? ('Expiration : ' + new Date(product.expiration).toLocaleString()) : ''}</span></div>
                            <div>
                                <button>Return</button>
                                <button>Extend</button>
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
