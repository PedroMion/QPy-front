import { useState } from 'react';
import './Dropdown.css'

function Dropdown({sectionId, sectionTitle}) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        if(isOpen) {
            document.getElementById(sectionId).style.display = 'none';
        } else {
            document.getElementById(sectionId).style.display = 'block';
        }

        setIsOpen(!isOpen);
    }

    return (
        <div className='dropdown-container'>
            <div className='dropdown-title'>
                {sectionTitle}
            </div>

            <div className='dropdown-button' onClick={handleClick}>
                ⌄
            </div>
        </div>
    )
};

export default Dropdown;