import './NavBar.css';

function NavBar() {
  return (
    <div className="nav-bar-container">
        <div className='nav-bar-options'>
            <div className='nav-bar-element'>
              <div className='nav-bar-element-text' id='nav-bar-element-text-mi'>
                μ
              </div>

              <div className='nav-bar-element-text'>
                Add Server
              </div>
            </div>

            <div className='nav-bar-element'>
              <div className='nav-bar-element-text' id='nav-bar-element-text-lambda'>
                λ
              </div>

              <div className='nav-bar-element-text'>
                Add Entry Point
              </div>
            </div>
        </div>

        <div className='nav-bar-button-container'>
          <div className='nav-bar-button'>Simulate</div>
        </div>
    </div>
  );
}

export default NavBar;
