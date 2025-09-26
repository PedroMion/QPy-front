import './MainPage.css';
import Canvas from '../Pages/Canvas';
import NavBar from '../UserInteractionTools/ToolBar';
import { useFlowState } from '../Hooks/useFlowState';
import { useObjectPropertiesModals } from '../Hooks/useObjectPropertiesModals';
import ServerProperties from '../ObjectPropertiesModal/ServerProperties';

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

  const {
    onClickAddServer,
    onModalClosed,
  } = useObjectPropertiesModals();

  return (
    <div className="main-page-container">
        <div className='main-page-nav-bar-container' id='main-page-nav-bar-container'>
          <NavBar 
            onClickAddServer={onClickAddServer} 
            onClickAddEntryPoint={addEntryPoint}
            onModalClosed={onModalClosed} />
        </div>

        <Canvas 
          nodes={nodes}
          onNodesChange={onNodesChange}
          onNodesDelete={onNodesDelete}
          edges={edges}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect} />
        
        <div id='main-page-server-properties-wrapper'>
          <ServerProperties />
        </div>
    </div>
  );
}

export default MainPage;
