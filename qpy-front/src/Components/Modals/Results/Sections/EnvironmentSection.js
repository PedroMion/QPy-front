import Dropdown from '../Components/Dropdown';
import '../ResultsModal.css'

function EnvironmentSection({simulationResults}) {
    return (
        <div className='results-modal-section-container'>
          <div className="results-modal-section-title">
            <Dropdown 
              sectionId='environment-section'
              sectionTitle='Environment'  
            />
          </div>

          <div id='environment-section' className='results-modal-section-container'>
            <div className='results-modal-section-field'>
              <div className='results-modal-section-field-label'>Total number of processed jobs:</div>

              <div className='results-modal-section-field-value'>{simulationResults?.environment?.processedJobs ?? "—"}</div>
            </div>

            <div className='results-modal-section-field'>
              <div className='results-modal-section-field-label'>Average time in system (E[T]):</div>

              <div className='results-modal-section-field-value'>{simulationResults?.environment?.averageTimeInSystem ?? "—"}</div>
            </div>

            <div className='results-modal-section-field'>
              <div className='results-modal-section-field-label'>Average time in queue (E[Tq]):</div>

              <div className='results-modal-section-field-value'>{simulationResults?.environment?.averageQueueTime ?? "—"}</div>
            </div>

            <div className='results-modal-section-field'>
              <div className='results-modal-section-field-label'>Average number of jobs (E[N]):</div>

              <div className='results-modal-section-field-value'>{simulationResults?.environment?.averageNumberOfJobs ?? "—"}</div>
            </div>

            <div className='results-modal-section-field'>
              <div className='results-modal-section-field-label'>Throughput (X):</div>

              <div className='results-modal-section-field-value'>{simulationResults?.environment?.throughput ?? "—"}</div>
            </div>

            <div className='results-modal-section-field'>
              <div className='results-modal-section-field-label'>Max demand (Dmax):</div>

              <div className='results-modal-section-field-value'>{simulationResults?.environment?.maxDemand ?? "—"}</div>
            </div>
          </div>
        </div>
    )
};

export default EnvironmentSection;