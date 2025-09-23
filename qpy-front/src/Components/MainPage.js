import './MainPage.css';
import NavBar from './NavBar';

function MainPage() {
  return (
    <div className="main-page-container">
        <div className='main-page-nav-bar-container'>
          <NavBar />
        </div>

        <div id='temp-board'>

        </div>
    </div>
  );
}

export default MainPage;
