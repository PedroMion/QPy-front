import './MainPage.css';

import { useEdges } from '../Hooks/useEdges';
import { useFlowState } from '../Hooks/useFlowState';
import { useObjectPropertiesModals } from '../Hooks/useObjectPropertiesModals';
import { useQueueSimulation } from '../Hooks/useQueueSimulation';

import Canvas from '../Pages/Canvas';
import NavBar from '../UserInteractionTools/ToolBar';
import EdgeProperties from '../Modals/ObjectProperties/Edge/EdgeProperties';
import AddEntryPointProperties from '../Modals/ObjectProperties/EntryPoint/AddEntryPointProperties';
import AddServerProperties from '../Modals/ObjectProperties/Server/AddServerProperties';
import EditServerProperties from '../Modals/ObjectProperties/Server/EditServerProperties';
import ResultsModal from '../Modals/Results/ResultsModal';
import EditEntryPointProperties from '../Modals/ObjectProperties/EntryPoint/EditEntryPointProperties';

function MainPage() {
  const {
    nodes,
    edges,
    onNodesChange,
    onNodesDelete,
    onEdgesChange,
    onConnect,
    onNodeClick,
    onEdgeClick,
    addServer,
    addEntryPoint,
    updateServer,
    updateEntryPoint,
    selectedElement,
  } = useFlowState();

  const {
    onClickAddServer,
    onClickAddEntryPoint,
    onModalClosed,
  } = useObjectPropertiesModals();

  const {
    edgeProperties,
    onAddEdge,
  } = useEdges(onConnect);

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
            simulate={() => {console.log(nodes[0])}} />
        </div>

        <Canvas 
          nodes={nodes}
          onNodesChange={onNodesChange}
          onNodesDelete={onNodesDelete}
          edges={edges}
          onEdgesChange={onEdgesChange}
          onConnect={onAddEdge}
          onNodeClick={onNodeClick}
          onEdgeClick={onEdgeClick} />
        
        <div id='main-page-server-properties-wrapper' className='main-page-modal-wrapper'>
          <AddServerProperties addServer={addServer} onModalClosed={onModalClosed} />
        </div>

        <div id='main-page-edit-server-wrapper' className='main-page-modal-wrapper'>
          <EditServerProperties server={selectedElement} updateServer={updateServer} onModalClosed={onModalClosed} />
        </div>

        <div id='main-page-entry-point-properties-wrapper' className='main-page-modal-wrapper'>
          <AddEntryPointProperties addEntryPoint={addEntryPoint} onModalClosed={onModalClosed} />
        </div>

        <div id='main-page-edit-entry-point-wrapper' className='main-page-modal-wrapper'>
          <EditEntryPointProperties entryPoint={selectedElement} updateEntryPoint={updateEntryPoint} onModalClosed={onModalClosed} />
        </div>

        <div id='main-page-edge-properties-wrapper' className='main-page-modal-wrapper'>
          <EdgeProperties onConnect={onConnect} onModalClosed={onModalClosed} edgeProperties={edgeProperties} />
        </div>

        <div id='main-page-results-properties-wrapper' className='main-page-modal-wrapper'>
          <ResultsModal onModalClosed={onModalClosed} simulationResults={simulationResults} />
        </div>

        <div id='main-page-black-screen'>
          
        </div>
    </div>
  );
}

export default MainPage;
