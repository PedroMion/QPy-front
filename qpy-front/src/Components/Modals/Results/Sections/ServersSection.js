import Dropdown from '../Components/Dropdown';
import '../ResultsModal.css';

function ServersSection({ simulationResults }) {
  const servers = simulationResults?.servers ?? [];

  return (
    <div className="results-modal-section-container">
      <div className="results-modal-section-title">
        <Dropdown
          sectionId="server-section"
          sectionTitle="Servers"
        />
      </div>

      <div id="server-section">
        {servers.length === 0 ? (
          <div className="results-modal-section-field-value">No server data available</div>
        ) : (
          servers.map((server) => (
            <div key={server.serverId} className="results-modal-subsection">
              <div className="results-modal-subsection-title">
                {server.serverId}
              </div>

              <div className="results-modal-section-field">
                <div className="results-modal-section-field-label">Processed jobs:</div>
                <div className="results-modal-section-field-value">{server.processedJobs ?? "—"}</div>
              </div>

              <div className="results-modal-section-field">
                <div className="results-modal-section-field-label">Average time in server (E[T]):</div>
                <div className="results-modal-section-field-value">{server.averageTimeInServer ?? "—"}</div>
              </div>

              <div className="results-modal-section-field">
                <div className="results-modal-section-field-label">Average queue time (E[Tq]):</div>
                <div className="results-modal-section-field-value">{server.averageQueueTime ?? "—"}</div>
              </div>

              <div className="results-modal-section-field">
                <div className="results-modal-section-field-label">Average number of jobs (E[N]):</div>
                <div className="results-modal-section-field-value">{server.averageNumberOfJobs ?? "—"}</div>
              </div>

              <div className="results-modal-section-field">
                <div className="results-modal-section-field-label">Average visits per job (V):</div>
                <div className="results-modal-section-field-value">{server.averageVisitsPerJob ?? "—"}</div>
              </div>

              <div className="results-modal-section-field">
                <div className="results-modal-section-field-label">Utilization (U):</div>
                <div className="results-modal-section-field-value">{server.utilization ?? "—"}</div>
              </div>

              <div className="results-modal-section-field">
                <div className="results-modal-section-field-label">Throughput (X):</div>
                <div className="results-modal-section-field-value">{server.throughput ?? "—"}</div>
              </div>

              <div className="results-modal-section-field">
                <div className="results-modal-section-field-label">Demand (D):</div>
                <div className="results-modal-section-field-value">{server.demand ?? "—"}</div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ServersSection;