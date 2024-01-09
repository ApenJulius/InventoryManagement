import React, { useEffect, useRef, useState } from 'react';
import { ProductStatus } from '../../types';
import './ProductModule.css';

interface IProduct {
    id: number;
    name: string;
    status: ProductStatus;
    borrower: string;
    lendingDate: string;
    lendingExpiration: string;
}
const ProductModule: React.FC<IProduct> = ({ id, name, status, borrower, lendingDate, lendingExpiration }) => {
    
    
    return ( 
        <div className='product-module-container'>

        </div>
    );
};

export default ProductModule;
