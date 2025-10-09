import './ResultsModal.css';
import EnvironmentSection from './Sections/EnvironmentSection';
import PrioritySection from './Sections/PrioritySection';
import ServersSection from './Sections/ServersSection';

function ResultsModal({onModalClosed, simulationResults}) {
  return (
    <div className="results-modal-container">
      <div className='results-modal-header'>
        <div className='results-modal-header-text'>Simulation Results</div>
        <div className='results-modal-header-button' onClick={onModalClosed}>X</div>
      </div>

      <EnvironmentSection simulationResults={simulationResults} />

      <ServersSection simulationResults={simulationResults} />

      <PrioritySection simulationResults={simulationResults} />
    </div>
  );
}

export default ResultsModal