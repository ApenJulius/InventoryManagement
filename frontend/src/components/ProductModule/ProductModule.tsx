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
            {product ? product.name + ' ' + product.status : 'Loading...'}
        </Veil>
    );
};

export default ProductModule;
