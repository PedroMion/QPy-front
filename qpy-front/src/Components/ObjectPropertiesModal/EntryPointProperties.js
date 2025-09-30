import { useState } from 'react';
import './ObjectProperties.css';

function EntryPointProperties({addEntryPoint, onModalClosed}) {
  const [arrivalRate, setArrivalRate] = useState("");
  const [arrivalDistribution, setArrivalDistribution] = useState("exponential");
  const [hasPriority, setHasPriority] = useState(false);

  const handleAddEntryPoint = () => {
    if (!arrivalRate) {
      alert("Please enter a valid arrival rate.");
      return;
    }

    addEntryPoint(arrivalRate, arrivalDistribution);
    onModalClosed();
  };

  return (
    <div className="object-properties-container">
      <div className='object-properties-header'>
        <div className='object-properties-header-text'>Configure Entry Point</div>
        <div className='object-properties-header-button' onClick={onModalClosed}>X</div>
      </div>

      <div className='object-properties-element'>
        <span className='object-properties-element-text'>Arrival Rate (Jobs per second):</span>
        <input
          type='number'
          className='object-properties-element-input'
          value={arrivalRate}
          onChange={(e) => setArrivalRate(e.target.value)}
        />
      </div>

      <div className='object-properties-element'>
        <span className='object-properties-element-text'>Arrival Distribution:</span>
        <select
          className='object-properties-element-select'
          value={arrivalDistribution}
          onChange={(e) => setArrivalDistribution(e.target.value)}
        >
          <option value="exponential">Exponential</option>
          <option value="constant">Constant</option>
          <option value="uniform">Uniform</option>
          <option value="normal">Normal</option>
        </select>
      </div>

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