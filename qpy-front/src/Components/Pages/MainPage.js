import './MainPage.css';

import { useEdges } from '../Hooks/useEdges';
import { useFlowState } from '../Hooks/useFlowState';
import { useObjectPropertiesModals } from '../Hooks/useObjectPropertiesModals';
import { useQueueSimulation } from '../Hooks/useQueueSimulation';

import Canvas from '../Pages/Canvas';
import NavBar from '../UserInteractionTools/ToolBar';
import EdgeProperties from '../Modals/ObjectProperties/EdgeProperties';
import EntryPointProperties from '../Modals/ObjectProperties/EntryPointProperties';
import AddServerProperties from '../Modals/ObjectProperties/AddServerProperties';
import EditServerProperties from '../Modals/ObjectProperties/EditServerProperties';
import ResultsModal from '../Modals/Results/ResultsModal';

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
            simulate={simulate} />
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
          <EntryPointProperties addEntryPoint={addEntryPoint} onModalClosed={onModalClosed} />
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
