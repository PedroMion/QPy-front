import './ResultsModal.css';
import EnvironmentSection from './Sections/EnvironmentSection';

function ResultsModal({onModalClosed, simulationResults}) {
  return (
    <div className="results-modal-container">
      <div className='results-modal-header'>
        <div className='results-modal-header-text'>Simulation Results</div>
        <div className='results-modal-header-button' onClick={onModalClosed}>X</div>
      </div>

      <EnvironmentSection simulationResults={simulationResults} />
    </div>
  );
}

export default ResultsModal