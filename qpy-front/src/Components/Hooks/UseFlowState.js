import { useState, useCallback, useRef } from 'react';
import {
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  useReactFlow
} from '@xyflow/react';


export const useFlowState = () => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  
  const { screenToFlowPosition } = useReactFlow();

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
  (connection, routingProbability) =>
    setEdges((eds) =>
      addEdge(
        {
          ...connection,
          animated: true,
          data: {"routingProbability": routingProbability},
          style: { stroke: "white", strokeWidth: 2 },
        },
          eds
        )
      ),
    [setEdges]
  );

  const addServer = useCallback((distributionProperties, queueDiscipline) => {
    const id = `server-${nextServerId.current}`;
    const { innerWidth, innerHeight } = window;

    const position = screenToFlowPosition({
      x: innerWidth / 2,
      y: innerHeight / 2,
    });

    const newNode = {
      id,
      type: "server",
      position: position,
      data: { 
        serverLabel: `Server ${nextServerId.current}`,
        distributionProperties: distributionProperties,
        queueDiscipline: queueDiscipline
      },
      style: { width: 80, height: 80 }
    };

    setNodes((nds) => [...nds, newNode]);
    nextServerId.current += 1;
  }, [setNodes, screenToFlowPosition]);

  const addEntryPoint = useCallback((distributionProperties, priorityDistribution) => {
    const id = `entry-point-${nextEntryPointId.current}`;
    const { innerWidth, innerHeight } = window;

    const position = screenToFlowPosition({
      x: innerWidth / 2,
      y: innerHeight / 2,
    });

    const newNode = {
      id,
      type: "entryPoint",
      position: position,
      data: { 
        entryPointLabel: `Entry Point ${nextEntryPointId.current}`,
        distributionProperties: distributionProperties,
        priorityDistribution: priorityDistribution
      },
      style: { width: 80, height: 60 }
    };

    setNodes((nds) => [...nds, newNode]);
    nextEntryPointId.current += 1;
  }, [setNodes, screenToFlowPosition]);


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