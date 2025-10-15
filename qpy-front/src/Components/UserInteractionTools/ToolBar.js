import './ToolBar.css';

function ToolBar({onClickAddServer, onClickAddJobSource, networkType, CLOSED, simulate}) {
  return (
    <div className="tool-bar-container">
        <div className='tool-bar-options'>
            <div className='tool-bar-element' onClick={onClickAddServer}>
              <div className='tool-bar-element-text' id='tool-bar-element-text-mi'>
                μ
              </div>

              <div className='tool-bar-element-text'>
                Add Server
              </div>
            </div>

            {networkType === CLOSED && (
              <div className='tool-bar-element' onClick={onClickAddJobSource}>
                <div className='tool-bar-element-text' id='tool-bar-element-text-lambda'>
                  λ
                </div>

                <div className='tool-bar-element-text'>
                  Add Job Source
                </div>
              </div>
            )};
        </div>

        <div className='tool-bar-button-container' onClick={simulate}>
          <div className='tool-bar-button'>Simulate</div>
        </div>
    </div>
  );
}

export default ToolBar;
