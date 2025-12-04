import './Header.css';
import icon from '../../Images/icon.png';
import { OPEN, CLOSED } from '../../Constants/networkConstants';

function Header({ 
    networkType,
    handleNetworkChange
}) {
    
    return (
        <div className="header-container">
            <div className='header-image-container'>
                <img src={icon} alt="QPy" className="header-image" />
            </div>

            <div className='header-selection-container'>
                <div className='header-selection-element'>
                    <div className='header-selection-element-text'>Network Type:</div>
                    <select
                        className="header-selection-element-select"
                        value={networkType}
                        onChange={(e) => handleNetworkChange(e.target.value)}
                    >
                        <option value={OPEN}>{OPEN}</option>
                        <option value={CLOSED}>{CLOSED}</option>
                    </select>
                </div>

                
            </div>
        </div>
    );
}

export default Header;