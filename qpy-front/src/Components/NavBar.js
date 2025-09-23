import './NavBar.css';

function NavBar() {
  return (
    <div className="nav-bar-container">
        <div className='nav-bar-options'>
            <div className='nav-bar-element'>
              μ
            </div>

            <div className='nav-bar-element'>
              λ
            </div>
        </div>

        <div className='nav-bar-button-container'>
          <div className='nav-bar-button'>Simulate</div>
        </div>
    </div>
  );
}

export default NavBar;
