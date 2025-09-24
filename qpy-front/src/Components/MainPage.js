import React, { useState, useCallback } from "react";
import { applyNodeChanges } from "reactflow";
import './MainPage.css';
import Canvas from './Canvas';
import NavBar from './NavBar';

function MainPage() {
  const [nodes, setNodes] = useState([]);
  const [nextServerId, setNextServerId] = useState(1);
  const [nextEntryPointId, setNextEntryPointId] = useState(1);

  const addServer = () => {
    const id = `server-${nextServerId}`;
    setNodes([
      ...nodes,
      {
        id,
        type: "server",
        position: { x: 100, y: 100 },
        data: { serverLabel: `Server ${nextServerId}` },
        style: { width: 60, height: 80 }
      },
    ]);
    setNextServerId(nextServerId + 1);
  };

  const addEntryPoint = () => {
    const id = `entry-point-${nextEntryPointId}`;
    setNodes([
      ...nodes,
      {
        id,
        type: "entryPoint",
        position: { x: 100, y: 100 },
        data: { entryPointLabel: `Entry Point ${nextEntryPointId}` },
        style: { width: 60, height: 60 }
      },
    ]);
    setNextEntryPointId(nextEntryPointId + 1);
  };

  const onNodesChange = useCallback(
    (changes) => setNodes(nds => applyNodeChanges(changes, nds)),
    []
  );

  const onNodesDelete = (deleted) => (
    setNodes((nds) => nds.filter((n) => !deleted.find((d) => d.id === n.id)))
  );

  return (
    <div className="main-page-container">
        <div className='main-page-nav-bar-container'>
          <NavBar onClickAddServer={addServer} onClickAddEntryPoint={addEntryPoint} />
        </div>

        <Canvas nodes={nodes} onNodesChange={onNodesChange} onNodesDelete={onNodesDelete} />
    </div>
  );
}

export default MainPage;
