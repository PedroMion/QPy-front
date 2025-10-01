import { useState } from 'react';
import './ObjectProperties.css';
import DistributionSection from './Sections/DistributionSection';

function EntryPointProperties({addEntryPoint, onModalClosed}) {
  const [distributionProperties, setDistributionProperties] = useState({});
  const [hasPriority, setHasPriority] = useState(false);

  const validateField = (data) => {
    return Object.values(data.params).every(value => value !== "");
  };

  const handleAddEntryPoint = () => {
    if (!validateField(distributionProperties)) {
      alert("Please enter valid distribution information.");
      return;
    }

    addEntryPoint(distributionProperties);
    onModalClosed();
  };

  return (
    <div className="object-properties-container">
      <div className='object-properties-header'>
        <div className='object-properties-header-text'>Configure Entry Point</div>
        <div className='object-properties-header-button' onClick={onModalClosed}>X</div>
      </div>

      <DistributionSection
        sectionTitle="Arrival Distribution:"
        setDistributionProperties={setDistributionProperties}
      />

      <div className='object-properties-element'>
        <span className='object-properties-element-text'>Priority Distribution:</span>
        <input type="checkbox" className='object-properties-element-input' value={hasPriority} />
      </div>

      <div className='object-properties-button-container'>
        <div
          className='object-properties-button'
          id='entry-point-button'
          onClick={handleAddEntryPoint}
        >
          Add Entry Point
        </div>
      </div>
    </div>
  );
}

export default EntryPointProperties;