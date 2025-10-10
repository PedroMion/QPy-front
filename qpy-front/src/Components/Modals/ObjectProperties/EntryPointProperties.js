import { useState } from 'react';
import './ObjectProperties.css';
import DistributionSection from './Sections/DistributionSection';
import PrioritySection from './Sections/PrioritySection';

function EntryPointProperties({addEntryPoint, onModalClosed}) {
  const [distributionProperties, setDistributionProperties] = useState({});
  const [priorityDistribution, setPriorityDistribution] = useState(false);

  const [resetFlag, setResetFlag] = useState(0);

  const resetCurrentConfiguration = () => {
    setResetFlag(resetFlag + 1);
  }

  const validateField = (data) => {
    return Object.values(data.params).every(value => value !== "");
  };

  const handleAddEntryPoint = () => {
    if (!validateField(distributionProperties)) {
      alert("Please enter valid distribution information.");
      return;
    }

    addEntryPoint(distributionProperties, priorityDistribution);
    onModalClosed();
    resetCurrentConfiguration();
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
        resetFlag={resetFlag}
      />

      <PrioritySection 
        setPriorityDistribution={setPriorityDistribution}
        resetFlag={resetFlag}
      />

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