import { useState } from 'react';
import './ObjectProperties.css';

function ServerProperties({addServer, onModalClosed}) {
  const [serviceRate, setServiceRate] = useState("");
  const [serviceDistribution, setServiceDistribution] = useState("exponential");
  const [queueDiscipline, setQueueDiscipline] = useState("fcfs");

  const handleAddServer = () => {
    if (!serviceRate) {
      alert("Please enter a valid service rate.");
      return;
    }

    addServer(serviceRate, serviceDistribution, queueDiscipline);
    onModalClosed();
  };

  return (
    <div className="object-properties-container">
      <div className='object-properties-header'>
        <div className='object-properties-header-text'>Configure Server</div>
        <div className='object-properties-header-button' onClick={onModalClosed}>X</div>
      </div>

      <div className='object-properties-element'>
        <span className='object-properties-element-text'>Service Rate (Jobs per second):</span>
        <input
          type='number'
          className='object-properties-element-input'
          value={serviceRate}
          onChange={(e) => setServiceRate(e.target.value)}
        />
      </div>

      <div className='object-properties-element'>
        <span className='object-properties-element-text'>Service Distribution:</span>
        <select
          className='object-properties-element-select'
          value={serviceDistribution}
          onChange={(e) => setServiceDistribution(e.target.value)}
        >
          <option value="exponential">Exponential</option>
          <option value="constant">Constant</option>
          <option value="uniform">Uniform</option>
          <option value="normal">Normal</option>
        </select>
      </div>

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