import './MainPage.css';
import SideBar from './SideBar';

function MainPage() {
  return (
    <div className="main-page-container">
        <div className='main-page-side-bar-container'>
          <SideBar />
        </div>

        <div id='temp-board'>

        </div>
    </div>
  );
}

export default MainPage;
