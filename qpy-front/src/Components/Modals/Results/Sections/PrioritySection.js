import Dropdown from '../Components/Dropdown';
import '../ResultsModal.css';

function PrioritySection({ simulationResults }) {
  const priorities = simulationResults?.priority ?? [];

  if (priorities.length <= 1) {
    return null;
  }

  return (
    <div className="results-modal-section-container">
      <div className="results-modal-section-title">
        <Dropdown
          sectionId="priority-section"
          sectionTitle="Priority Metrics"
        />
      </div>

      <div id="priority-section">
        {priorities.map((p) => (
          <div key={p.priority} className="results-modal-subsection">
            <div className="results-modal-subsection-title">
              Priority {p.priority}
            </div>

            <div className="results-modal-section-field">
              <div className="results-modal-section-field-label">
                Processed jobs:
              </div>
              <div className="results-modal-section-field-value">
                {p.processedJobs ?? "—"}
              </div>
            </div>

            <div className="results-modal-section-field">
              <div className="results-modal-section-field-label">
                Average time in system (E[T]):
              </div>
              <div className="results-modal-section-field-value">
                {p.averageTimeInSystem ?? "—"}
              </div>
            </div>

            <div className="results-modal-section-field">
              <div className="results-modal-section-field-label">
                Average time in queue (E[Tq]):
              </div>
              <div className="results-modal-section-field-value">
                {p.averageQueueTime ?? "—"}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PrioritySection;