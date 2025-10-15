import './MainPage.css';

import { useEdges } from '../Hooks/useEdges';
import { useFlowState } from '../Hooks/useFlowState';
import { useObjectPropertiesModals } from '../Hooks/useObjectPropertiesModals';
import { useQueueSimulation } from '../Hooks/useQueueSimulation';
import { useNetworkConfiguration } from '../Hooks/useNetworkConfiguration';

import Canvas from '../Pages/Canvas';
import Header from '../UserInteractionTools/Header';
import NavBar from '../UserInteractionTools/ToolBar';
import EdgeProperties from '../Modals/ObjectProperties/Edge/EdgeProperties';
import AddJobSourceProperties from '../Modals/ObjectProperties/JobSource/AddJobSourceProperties';
import AddServerProperties from '../Modals/ObjectProperties/Server/AddServerProperties';
import EditServerProperties from '../Modals/ObjectProperties/Server/EditServerProperties';
import ResultsModal from '../Modals/Results/ResultsModal';
import EditJobSourceProperties from '../Modals/ObjectProperties/JobSource/EditJobSourceProperties';
import Loading from '../Modals/General/Loading';
import ErrorModal from '../Modals/General/ErrorModal';
import SimulationProperties from '../Modals/ObjectProperties/Simulation/SimulationProperties';

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
    setEnvironmentWhenNetworkChanges,
  } = useFlowState();

  const {
    onClickAddServer,
    onClickAddJobSource,
    onClickSimulate,
    onModalClosed,
  } = useObjectPropertiesModals();

  const {
    edgeProperties,
    onAddEdge,
  } = useEdges(onConnect);

  const {
    OPEN,
    CLOSED,
    networkType,
    numOfTerminals,
    setNumOfTerminals,
    averageThinkTime,
    setAverageThinkTime,
    handleNetworkChange,
    getNetworkConfiguration,
  } = useNetworkConfiguration(setEnvironmentWhenNetworkChanges);

  const {
    time,
    setTime,
    warmup,
    setWarmup,
    simulate,
    simulationResults,
  } = useQueueSimulation(nodes, edges, getNetworkConfiguration);

  return (
    <div className="main-page-container">
        <div className='main-page-header-container'>
          <Header
            OPEN={OPEN} CLOSED={CLOSED} networkType={networkType}
            numOfTerminals={numOfTerminals} setNumOfTerminals={setNumOfTerminals}
            averageThinkTime={averageThinkTime} setAverageThinkTime={setAverageThinkTime}
            handleNetworkChange={handleNetworkChange}
          />
        </div>
        
        <div className='main-page-nav-bar-container' id='main-page-nav-bar-container'>
          <NavBar 
            onClickAddServer={onClickAddServer} 
            onClickAddJobSource={onClickAddJobSource}
            networkType={networkType} OPEN={OPEN}
            simulate={onClickSimulate} />
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

        <div id='main-page-simulation-properties-wrapper' className='main-page-modal-wrapper'>
          <SimulationProperties 
            onModalClosed={onModalClosed} simulate={simulate} 
            time={time} setTime={setTime}
            warmup={warmup} setWarmup={setWarmup}
          />
        </div>

        <div id='main-page-results-properties-wrapper' className='main-page-modal-wrapper'>
          <ResultsModal onModalClosed={onModalClosed} simulationResults={simulationResults} />
        </div>

        <div id='main-page-error-modal-wrapper' className='main-page-modal-wrapper'>
          <ErrorModal onModalClosed={onModalClosed} />
        </div>

        <div id='main-page-loading-wrapper' className='main-page-modal-wrapper'>
          <Loading />
        </div>

        <div id='main-page-black-screen'>
          
        </div>
    </div>
  );
}

export default MainPage;