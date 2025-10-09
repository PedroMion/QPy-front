import { useState } from 'react';
import './Dropdown.css'

function Dropdown({sectionId, sectionTitle}) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        if(isOpen) {
            document.getElementById(sectionId).style.display = 'none';
            document.getElementById('dropdown-button'+sectionId).style.transform = 'rotate(0deg)';
        } else {
            document.getElementById(sectionId).style.display = 'block';
            document.getElementById('dropdown-button'+sectionId).style.transform = 'rotate(180deg)';
        }
        
        setIsOpen(!isOpen);
    }

    return (
        <div className='dropdown-container'>
            <div className='dropdown-title'>
                {sectionTitle}
            </div>

            <div className='dropdown-button' id={'dropdown-button' + sectionId} onClick={handleClick}>
                ▼
            </div>
        </div>
    )
};

export default Dropdown;