import React, { useEffect } from 'react';
import './Inventory.css';
import ProductModule from '../ProductModule/ProductModule';
import { IProduct } from '../../types';

const Inventory: React.FC = () => {
    // Add your component logic here
    const [products, setProducts] = React.useState<IProduct[]>([]);
    const [productModule, setProductModule] = React.useState<IProduct | null>(null);
    const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
    
    
    
    useEffect(() =>{
        fetch(`${process.env.REACT_APP_BACKEND}/products`).then((res) => res.json())
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => console.error('Error:', error));
    }, []);




    const handleRowClick = (product: IProduct) => {
        fetch(`${process.env.REACT_APP_BACKEND}/products/${product.id}`).then((res) => res.json()).then((data) => {
            console.log(data);
        });
        setProductModule(product);
        setIsModalOpen(true);
    };

    return ( 
        <div className='inventory-container'>
            <table style={{ width:'100%', minWidth: 'max-content' }}>
                <thead style={{ textAlign:'left' }}>
                    <tr>
                        <th>Product</th>
                        <th>Status</th>
                        <th>Borrower</th>
                        <th>Lending Date</th>
                        <th>Expiration</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={index} onClick={() => handleRowClick(product)}>
                            <td>{product.name}</td>
                            <td>{product.status}</td>
                            <td>{product.borrower}</td>
                            <td>{product.lendingDate ? new Date(product.lendingDate).toLocaleString() : ''}</td>
                            <td>{product.expiration ? new Date(product.expiration).toLocaleString() : ''}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {
                isModalOpen ?
                    <ProductModule initialProduct={productModule} onOutsideClick={() => setIsModalOpen(false)}/>
                    : null
            }
        </div>
    );
};

export default Inventory;
