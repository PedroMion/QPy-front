import './App.css';
import MainPage from './Components/Pages/MainPage';
import { ReactFlowProvider } from 'reactflow';

function App() {
  return (
    <div className="app-container">
      <ReactFlowProvider>
        <MainPage />
      </ReactFlowProvider>;
    </div>
  );
}

export default App;
