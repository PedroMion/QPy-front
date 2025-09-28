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
  (connection) =>
    setEdges((eds) =>
      addEdge(
        {
          ...connection,
          animated: true,
          style: { stroke: "white", strokeWidth: 2 },
        },
          eds
        )
      ),
    [setEdges]
  );

  const addServer = useCallback((serviceRate, serviceDistribution, queueDiscipline) => {
    const id = `server-${nextServerId.current}`;

    const newNode = {
      id,
      type: "server",
      position: { x: Math.random() * 400, y: Math.random() * 400 },
      data: { 
        serverLabel: `Server ${nextServerId.current}`,
        serviceRate: serviceRate,
        serviceDistribution: serviceDistribution,
        queueDiscipline: queueDiscipline
      },
      style: { width: 80, height: 80 }
    };

    setNodes((nds) => [...nds, newNode]);
    nextServerId.current += 1;
  }, [setNodes]);

  const addEntryPoint = useCallback(() => {
    const id = `entry-point-${nextEntryPointId.current}`;

    const newNode = {
      id,
      type: "entryPoint",
      position: { x: Math.random() * 400, y: Math.random() * 400 },
      data: { entryPointLabel: `Entry Point ${nextEntryPointId.current}` },
      style: { width: 80, height: 60 }
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