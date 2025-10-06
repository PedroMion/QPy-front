import './ObjectProperties.css';

function ResultsModal({onModalClosed, simulationResults}) {
  return (
    <div className="object-properties-container">
      <div className='object-properties-header'>
        <div className='object-properties-header-text'>Simulation Results</div>
        <div className='object-properties-header-button' onClick={onModalClosed}>X</div>
      </div>
    </div>
  );
}

export default ResultsModal