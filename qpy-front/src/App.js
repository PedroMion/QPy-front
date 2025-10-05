import './App.css';
import '@xyflow/react/dist/style.css';
import MainPage from './Components/Pages/MainPage';
import { ReactFlowProvider } from '@xyflow/react';

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
