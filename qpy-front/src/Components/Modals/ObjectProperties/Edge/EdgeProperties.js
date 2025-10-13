import { useState } from 'react';
import '../ObjectProperties.css';

function EdgeProperties({onConnect, onModalClosed, edgeProperties}) {
  const [routingProbability, setRoutingProbability] = useState(0);


  const resetCurrentConfiguration = () => {
    setRoutingProbability(0);

    document.getElementById('edge-properties-input').value = null;
  };

  const validateField = () => {
    return routingProbability >= 0 && routingProbability <= 1;
  };

  const handleEdgeConnection = () => {
    if (!validateField()) {
      alert("Please enter a valid routin probability.");
      return;
    }

    onConnect(edgeProperties, routingProbability);
    onModalClosed();
    resetCurrentConfiguration();
  };

  return (
    <div className="object-properties-container">
      <div className='object-properties-header'>
        <div className='object-properties-header-text'>Configure Edge</div>
        <div className='object-properties-header-button' onClick={onModalClosed}>X</div>
      </div>

      <div className="object-properties-element">
        <span className="object-properties-element-text">Routing Probability</span>
        <input
            id = "edge-properties-input"
            type="number"
            className='object-properties-element-input'
            step="0.01"
            min="0"
            max="1"
            onChange={(e) => setRoutingProbability(e.target.value)}
            placeholder="Probability"
        />
      </div>

      <div className='object-properties-button-container'>
        <div
          className='object-properties-button'
          id='entry-point-button'
          onClick={handleEdgeConnection}
        >
          Add Edge
        </div>
      </div>
    </div>
  );
}

export default EdgeProperties;