import './MainPage.css';
import Canvas from '../Pages/Canvas';
import NavBar from '../UserInteractionTools/ToolBar';
import { useFlowState } from '../Hooks/UseFlowState';

function MainPage() {
    const {
      nodes,
      edges,
      onNodesChange,
      onNodesDelete,
      onEdgesChange,
      onConnect,
      addServer,
      addEntryPoint,
  } = useFlowState();

  return (
    <div className="main-page-container">
        <div className='main-page-nav-bar-container'>
          <NavBar onClickAddServer={addServer} onClickAddEntryPoint={addEntryPoint} />
        </div>

        <Canvas 
          nodes={nodes}
          onNodesChange={onNodesChange}
          onNodesDelete={onNodesDelete}
          edges={edges}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect} />
    </div>
  );
}

export default MainPage;
