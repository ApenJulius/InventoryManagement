
import Veil from '../Veil/Veil';
import './AddProductModal.css';
interface IProductModule {
    onOutsideClick?: () => void;
}


const AddProductModal: React.FC<IProductModule> = ({ onOutsideClick }) => {

    const handleOutsideClick = async () => {
        if (onOutsideClick)
            onOutsideClick();
    };
    
    const addProducts = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        fetch(`${process.env.REACT_APP_BACKEND}/products/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                name:e.target.name.value,
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                amount:e.target.amount.value
            })
        }).then(res => res.json()).then(data => {
            console.log(data);
        }).catch(err => {
            console.log(err);
        });
    };


    return ( 
        <Veil onOutsideClick={handleOutsideClick}>
            <div className="add-product-container">
                <form style={{ display:'flex', flexDirection:'column' }} onSubmit={addProducts}>
                    <div className='label-input-div'>
                        <label>Name </label>
                        <input type="text" placeholder="Product Name" name="name"/>
                       
                    </div>
                    <div className="label-input-div">
                        <label>Amount </label>
                        <input type="number" placeholder='Product Amount' inputMode='numeric' name="amount"/>
                    </div>
                    <button>Create</button>
                    <span style={{ fontSize:'XX-small' }}>*You can edit after adding</span>
                </form>
            </div>
        </Veil>
    );
};

export default AddProductModal;
