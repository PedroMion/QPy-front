import './MainPage.css';
import Canvas from '../Pages/Canvas';
import NavBar from '../UserInteractionTools/ToolBar';
import { useEdges } from '../Hooks/useEdges';
import { useFlowState } from '../Hooks/useFlowState';
import { useObjectPropertiesModals } from '../Hooks/useObjectPropertiesModals';
import { useQueueSimulation } from '../Hooks/useQueueSimulation';
import EdgeProperties from '../ObjectPropertiesModal/EdgeProperties';
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

  const {
    edgeProperties,
    onAddEdge,
  } = useEdges();

  const {
    simulate,
  } = useQueueSimulation(nodes, edges);

  return (
    <div className="main-page-container">
        <div className='main-page-nav-bar-container' id='main-page-nav-bar-container'>
          <NavBar 
            onClickAddServer={onClickAddServer} 
            onClickAddEntryPoint={onClickAddEntryPoint}
            simulate={simulate} />
        </div>

        <Canvas 
          nodes={nodes}
          onNodesChange={onNodesChange}
          onNodesDelete={onNodesDelete}
          edges={edges}
          onEdgesChange={onEdgesChange}
          onConnect={onAddEdge} />
        
        <div id='main-page-server-properties-wrapper'>
          <ServerProperties addServer={addServer} onModalClosed={onModalClosed} />
        </div>

        <div id='main-page-entry-point-properties-wrapper'>
          <EntryPointProperties addEntryPoint={addEntryPoint} onModalClosed={onModalClosed} />
        </div>

        <div id='main-page-edge-properties-wrapper'>
          <EdgeProperties onConnect={onConnect} onModalClosed={onModalClosed} edgeProperties={edgeProperties} />
        </div>
    </div>
  );
}

export default MainPage;
