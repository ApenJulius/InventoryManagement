import { IVeil } from '../../types';
import './Veil.css';
const Veil: React.FC<IVeil> = ({ onOutsideClick, children }) => {
    const handleOutsideClick = () => {
        if (onOutsideClick) 
            onOutsideClick();
    };

    return (
        <div className='veil' onClick={handleOutsideClick}>
            <div onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Veil;
