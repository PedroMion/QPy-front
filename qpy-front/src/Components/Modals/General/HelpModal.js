import './HelpModal.css';

function HelpModal({onModalClosed}) {
  return (
    <div className="help-modal-container">
        <div className='help-modal-header'>
            <div className='help-modal-header-text'>How to Use</div>
            <div className='help-modal-header-button' onClick={onModalClosed}>X</div>
        </div>

        <div className='help-modal-text'>
            This system can be used to emulate the behavior of different types of computer networks.
        </div>

        <div className='help-modal-text'>
            Start by choosing between an open or closed network at the top of the screen.
            If you select a closed network, a terminal object will automatically appear on the drawing canvas. The terminal represents the users or devices that generate and receive jobs within the system. To make the network functional, you need to create at least one connection from the terminal to a server, and this will act as the entry point for jobs.
        </div>

        <div className='help-modal-text'>
            If you select an open network, you will see an option on the bottom bar to add job sources. Each source generates jobs that enter the system according to the arrival rate and distribution you define. This allows you to simulate workloads coming from external users or processes. Each entry point has an arrival distribution that must be configured, along with an optional priority distribution, which can be used to generate jobs with different priority levels.
        </div>

        <div className='help-modal-text'>
            After setting up your entry points, you can add servers to the canvas using the "Add Server" button. Each server can be configured with its own parameters — the service time distribution and the queue discipline. To connect components, simply drag a line from one node to another. Each connection has a routing probability, which determines how likely it is for a job to move from one node to the next. Note that job sources do not require routing probabilities.
        </div>

        <div className='help-modal-text'>
            When your network design is ready, click "Simulate". You will then be prompted to enter the simulation time parameters, including the total time and warm-up period.
            If the network is closed, you must also define the think time distribution and the number of terminals using the system.
        </div>

        <div className='help-modal-text'>
            When the simulation finishes, the results will be displayed automatically. You can collect and analyze them, or return to the canvas to make adjustments and run another experiment.
        </div>
    </div>
  );
}

export default HelpModal