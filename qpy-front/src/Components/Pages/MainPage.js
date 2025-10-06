import './MainPage.css';

import { useEdges } from '../Hooks/useEdges';
import { useFlowState } from '../Hooks/useFlowState';
import { useObjectPropertiesModals } from '../Hooks/useObjectPropertiesModals';
import { useQueueSimulation } from '../Hooks/useQueueSimulation';

import Canvas from '../Pages/Canvas';
import NavBar from '../UserInteractionTools/ToolBar';
import EdgeProperties from '../ObjectPropertiesModal/EdgeProperties';
import EntryPointProperties from '../ObjectPropertiesModal/EntryPointProperties';
import ServerProperties from '../ObjectPropertiesModal/ServerProperties';
import ResultsModal from '../ObjectPropertiesModal/ResultsModal';

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
    simulationResults,
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
        
        <div id='main-page-server-properties-wrapper' className='main-page-modal-wrapper'>
          <ServerProperties addServer={addServer} onModalClosed={onModalClosed} />
        </div>

        <div id='main-page-entry-point-properties-wrapper' className='main-page-modal-wrapper'>
          <EntryPointProperties addEntryPoint={addEntryPoint} onModalClosed={onModalClosed} />
        </div>

        <div id='main-page-edge-properties-wrapper' className='main-page-modal-wrapper'>
          <EdgeProperties onConnect={onConnect} onModalClosed={onModalClosed} edgeProperties={edgeProperties} />
        </div>

        <div id='main-page-results-properties-wrapper' className='main-page-modal-wrapper'>
          <ResultsModal onModalClosed={onModalClosed} simulationResults={simulationResults} />
        </div>
    </div>
  );
}

export default MainPage;
