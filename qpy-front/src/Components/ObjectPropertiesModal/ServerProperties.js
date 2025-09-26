import './ServerProperties.css';

function ServerProperties() {
  return (
    <div className="server-properties-container">
      <div className='server-properties-element'>
        <span className='server-properties-element-text'>Service Rate (Jobs per second):</span>
        <input></input>
      </div>

      <div className='server-properties-element'>
        <span className='server-properties-element-text'>Service Distribution:</span>
        <input></input>
      </div>

      <div className='server-properties-element'>
        <span className='server-properties-element-text'>Queue Discipline:</span>
        <input></input>
      </div>
    </div>
  );
}

export default ServerProperties;
