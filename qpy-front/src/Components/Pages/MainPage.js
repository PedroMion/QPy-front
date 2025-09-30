import './MainPage.css';
import Canvas from '../Pages/Canvas';
import NavBar from '../UserInteractionTools/ToolBar';
import { useFlowState } from '../Hooks/useFlowState';
import { useObjectPropertiesModals } from '../Hooks/useObjectPropertiesModals';
import EntryPointProperties from '../ObjectPropertiesModal/EntryPointProperties';
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
    onClickAddEntryPoint,
    onModalClosed,
  } = useObjectPropertiesModals();

  return (
    <div className="main-page-container">
        <div className='main-page-nav-bar-container' id='main-page-nav-bar-container'>
          <NavBar 
            onClickAddServer={onClickAddServer} 
            onClickAddEntryPoint={onClickAddEntryPoint}
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
          <ServerProperties addServer={addServer} onModalClosed={onModalClosed} />
        </div>

        <div id='main-page-entry-point-properties-wrapper'>
          <EntryPointProperties addEntryPoint={addEntryPoint} onModalClosed={onModalClosed} />
        </div>
    </div>
  );
}

export default MainPage;
