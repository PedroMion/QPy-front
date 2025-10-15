import './MainPage.css';

import { useEdges } from '../Hooks/useEdges';
import { useFlowState } from '../Hooks/useFlowState';
import { useObjectPropertiesModals } from '../Hooks/useObjectPropertiesModals';
import { useQueueSimulation } from '../Hooks/useQueueSimulation';

import Canvas from '../Pages/Canvas';
import Header from '../UserInteractionTools/Header';
import NavBar from '../UserInteractionTools/ToolBar';
import EdgeProperties from '../Modals/ObjectProperties/Edge/EdgeProperties';
import AddJobSourceProperties from '../Modals/ObjectProperties/JobSource/AddJobSourceProperties';
import AddServerProperties from '../Modals/ObjectProperties/Server/AddServerProperties';
import EditServerProperties from '../Modals/ObjectProperties/Server/EditServerProperties';
import ResultsModal from '../Modals/Results/ResultsModal';
import EditJobSourceProperties from '../Modals/ObjectProperties/JobSource/EditJobSourceProperties';

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
    addJobSource,
    updateServer,
    updateJobSource,
    selectedElement,
  } = useFlowState();

  const {
    onClickAddServer,
    onClickAddJobSource,
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
        <div className='main-page-header-container'>
          <Header
            setNetworkProperties={(data) => console.log(data)}
          />
        </div>
        
        <div className='main-page-nav-bar-container' id='main-page-nav-bar-container'>
          <NavBar 
            onClickAddServer={onClickAddServer} 
            onClickAddJobSource={onClickAddJobSource}
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

        <div id='main-page-job-source-properties-wrapper' className='main-page-modal-wrapper'>
          <AddJobSourceProperties addJobSource={addJobSource} onModalClosed={onModalClosed} />
        </div>

        <div id='main-page-edit-job-source-wrapper' className='main-page-modal-wrapper'>
          <EditJobSourceProperties jobSource={selectedElement} updateJobSource={updateJobSource} onModalClosed={onModalClosed} />
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
