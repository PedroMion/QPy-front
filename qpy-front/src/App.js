import './App.css';
import '@xyflow/react/dist/style.css';
import MainPage from './Components/Pages/MainPage';
import { ReactFlowProvider } from '@xyflow/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="app-container">
      <ReactFlowProvider>
        <MainPage />
      </ReactFlowProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
