import './ErrorModal.css';

function ErrorModal({onModalClosed}) {
  return (
    <div className="error-modal-container">
        <div className='error-modal-header'>
            <div className='error-modal-header-text'>Error</div>
            <div className='error-modal-header-button' onClick={onModalClosed}>X</div>
        </div>

        <div className='error-modal-text'>
            Something went wrong with the simulation. Please, try again later.
        </div>
    </div>
  );
}

export default ErrorModal