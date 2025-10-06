import { useState } from 'react';
import './ObjectProperties.css';
import DistributionSection from './Sections/DistributionSection';
import QueueDisciplineSection from './Sections/QueueDisciplineSection';

function ServerProperties({addServer, onModalClosed}) {
  const [distributionProperties, setDistributionProperties] = useState({});
  const [queueProperties, setQueueProperties] = useState({});

  const validateField = (data) => {
    return Object.values(data.params).every(value => value !== "");
  };

  const handleAddServer = () => {
    if (!validateField(distributionProperties)) {
      alert("Please enter valid distribution information.");
      return;
    }

    if (!validateField(queueProperties)) {
      alert("Please enter valid queue information.");
      return;
    }

    addServer(distributionProperties, queueProperties);
    onModalClosed();
  };

  return (
    <div className="object-properties-container">
      <div className='object-properties-header'>
        <div className='object-properties-header-text'>Configure Server</div>
        <div className='object-properties-header-button' onClick={onModalClosed}>X</div>
      </div>

      <DistributionSection
        sectionTitle="Service Distribution:"
        setDistributionProperties={setDistributionProperties}
      />

      <QueueDisciplineSection 
        setQueueProperties={setQueueProperties}
      />

      <div className='object-properties-button-container'>
        <div
          className='object-properties-button'
          onClick={handleAddServer}
        >
          Add Server
        </div>
      </div>
    </div>
  );
}

export default ServerProperties;