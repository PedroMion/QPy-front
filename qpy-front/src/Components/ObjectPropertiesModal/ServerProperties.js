import { useState } from 'react';
import './ObjectProperties.css';
import DistributionSection from './Sections/DistributionSection';

function ServerProperties({addServer, onModalClosed}) {
  const [distributionProperties, setDistributionProperties] = useState({});
  const [queueDiscipline, setQueueDiscipline] = useState("fcfs");

  const validateField = (data) => {
    return Object.values(data.params).every(value => value !== "");
  };

  const handleAddServer = () => {
    if (!validateField(distributionProperties)) {
      alert("Please enter valid distribution information.");
      return;
    }

    addServer(distributionProperties, queueDiscipline);
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

      <div className='object-properties-element'>
        <span className='object-properties-element-text'>Queue Discipline:</span>
        <select
          className='object-properties-element-select'
          value={queueDiscipline}
          onChange={(e) => setQueueDiscipline(e.target.value)}
        >
          <option value="fcfs">First Come First Served</option>
          <option value="lcfs">Last Come First Served</option>
          <option value="rr">Round Robin</option>
          <option value="srt">Shortest Remaining Time</option>
          <option value="priority">Priority</option>
        </select>
      </div>

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