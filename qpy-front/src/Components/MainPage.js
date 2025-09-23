import './MainPage.css';
import Canvas from './Canvas';
import NavBar from './NavBar';

function MainPage() {
  return (
    <div className="main-page-container">
        <div className='main-page-nav-bar-container'>
          <NavBar />
        </div>

        <Canvas />
    </div>
  );
}

export default MainPage;
