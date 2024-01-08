import React from 'react';
import './Inventory.css';


const Inventory: React.FC = () => {
    // Add your component logic here
    const data = [ { product:'product1', borrower:'borrower1', lendingDate:'lendingDate1', status:'status1', expiration:'expiration1', action:'action1' },
        { product:'product2', borrower:'borrower2', lendingDate:'lendingDate2', status:'status2', expiration:'expiration2', action:'action2' },
        { product:'product3', borrower:'borrower3', lendingDate:'lendingDate3', status:'status3', expiration:'expiration3', action:'action3' },
        { product:'product2', borrower:'borrower2', lendingDate:'lendingDate2', status:'status2', expiration:'expiration2', action:'action2' },
        { product:'product3', borrower:'borrower3', lendingDate:'lendingDate3', status:'status3', expiration:'expiration3', action:'action3' },];
    return ( 
        <div className='inventory-container'>
            <table style={{ width:'100%', minWidth: 'max-content' }}>
                <thead style={{ textAlign:'left' }}>
                    <tr>
                        <th>Product</th>
                        <th>Borrower</th>
                        <th>Lending Date</th>
                        <th>Status</th>
                        <th>Expiration</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index} style={{ padding:'3px' }}>
                            <td>{item.product}</td>
                            <td>{item.borrower}</td>
                            <td>{item.lendingDate}</td>
                            <td>{item.status}</td>
                            <td>{item.expiration}</td>
                            <td><button>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Inventory;
