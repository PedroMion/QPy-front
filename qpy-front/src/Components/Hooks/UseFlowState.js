// hooks/useFlowState.js

import { useState, useCallback, useRef } from 'react';
import {
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
} from 'reactflow';


export const useFlowState = () => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  const nextServerId = useRef(1);
  const nextEntryPointId = useRef(1);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  
  const onNodesDelete = useCallback(
    (deleted) => setNodes((nds) => nds.filter((n) => !deleted.find((d) => d.id === n.id))),
    [setNodes]
  );

  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  
  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  const addServer = useCallback(() => {
    const id = `server-${nextServerId.current}`;

    const newNode = {
      id,
      type: "server",
      position: { x: 100, y: 100 },
      data: { serverLabel: `Server ${nextServerId.current}` },
      style: { width: 60, height: 80 }
    };

    setNodes((nds) => [...nds, newNode]);
    nextServerId.current += 1;
  }, [setNodes]);

  const addEntryPoint = useCallback(() => {
    const id = `entry-point-${nextEntryPointId.current}`;

    const newNode = {
      id,
      type: "entryPoint",
      position: { x: 100, y: 100 },
      data: { entryPointLabel: `Entry Point ${nextEntryPointId.current}` },
      style: { width: 60, height: 60 }
    };

    setNodes((nds) => [...nds, newNode]);
    nextEntryPointId.current += 1;
  }, [setNodes]);


  return {
    nodes,
    edges,
    onNodesChange,
    onNodesDelete,
    onEdgesChange,
    onConnect,
    addServer,
    addEntryPoint,
  };
};