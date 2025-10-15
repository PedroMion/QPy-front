import './Header.css';
import icon from '../../Images/icon.png';

function Header({
    OPEN, 
    CLOSED, 
    networkType, 
    numOfTerminals, 
    setNumOfTerminals, 
    averageThinkTime, 
    setAverageThinkTime, 
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

                {networkType === CLOSED && (
                    <>
                        <div className='header-selection-element'>
                            <div className='header-selection-element-text'>Number of Terminals:</div>
                            <input
                                type="number"
                                min="1"
                                step="1"
                                className="header-selection-element-input"
                                value={numOfTerminals}
                                onChange={(e) => setNumOfTerminals(e.target.value)}
                            />
                        </div>

                        <div className='header-selection-element'>
                            <div className='header-selection-element-text'>Average Think Time E[Z]:</div>
                            <input
                                type="number"
                                step="0.01"
                                className="header-selection-element-input"
                                value={averageThinkTime}
                                onChange={(e) => setAverageThinkTime(e.target.value)}
                            />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Header;