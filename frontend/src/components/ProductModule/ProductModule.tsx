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
                            <div><span>{product.id}</span></div>
                            <div><span>{product.name}</span></div>
                            <div><span>{product.borrower}</span></div>
                            <div><span>{product.lendingDate ? new Date(product.lendingDate).toLocaleString() : ''}</span></div>
                            <div><span>{product.expiration}</span></div>
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
