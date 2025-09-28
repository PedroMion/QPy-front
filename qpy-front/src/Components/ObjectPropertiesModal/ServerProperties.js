import './ServerProperties.css';

function ServerProperties() {
  return (
    <div className="server-properties-container">
      <div className='server-properties-header'>
        <div className='server-properties-header-text'>Configure Server</div>
        <div className='server-properties-header-button'>X</div>
      </div>

      <div className='server-properties-element'>
        <span className='server-properties-element-text'>Service Rate (Jobs per second):</span>
        <input type='number' className='server-properties-element-input'></input>
      </div>

      <div className='server-properties-element'>
        <span className='server-properties-element-text'>Service Distribution:</span>
        <select className='server-properties-element-select'>
          <option>Exponential</option>
          <option>Constant</option>
          <option>Uniform</option>
          <option>Normal</option>
        </select>
      </div>

      <div className='server-properties-element'>
        <span className='server-properties-element-text'>Queue Discipline:</span>
        <select className='server-properties-element-select'>
          <option>First Come First Served</option>
          <option>Last Come First Served</option>
          <option>Round Robin</option>
          <option>Shortest Remaining Time</option>
          <option>Normal</option>
          <option>Priority</option>
        </select>
      </div>

      <div className='server-properties-button-container'>
        <div className='server-properties-button'>Add Server</div>
      </div>
    </div>
  );
}

export default ServerProperties;
