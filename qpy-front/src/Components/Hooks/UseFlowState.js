import { useState, useCallback, useRef } from 'react';
import {
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  useReactFlow
} from '@xyflow/react';
import { useObjectPropertiesModals } from './useObjectPropertiesModals';
import { useNetworkConfiguration } from './useNetworkConfiguration';


export const useFlowState = () => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  const [selectedElement, setSelectedElement] = useState({});

  const {
    onClickEditServer,
    onClickEditJobSource,
  } = useObjectPropertiesModals();

  const {
    CLOSED,
  } = useNetworkConfiguration();
  
  const { screenToFlowPosition } = useReactFlow();

  const nextServerId = useRef(1);
  const nextJobSourceId = useRef(1);

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
          data: {
            routingProbability,
          },
          style: { stroke: "white", strokeWidth: 2 },
          label: routingProbability,
        },
          eds
        )
      ),
    [setEdges]
  );

  const onNodeClick = useCallback((_, node) => {
    setSelectedElement(node);

    if(node.type === "server") {
      onClickEditServer();
    } else {
      onClickEditJobSource();
    }
  }, [onClickEditServer, onClickEditJobSource]);

  const onEdgeClick = useCallback((_, edge) => {
    setSelectedElement(edge);
  }, []);

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

  const addJobSource = useCallback((distributionProperties, priorityDistribution) => {
    const id = `job-source-${nextJobSourceId.current}`;
    const { innerWidth, innerHeight } = window;

    const position = screenToFlowPosition({
      x: innerWidth / 2,
      y: innerHeight / 2,
    });

    const newNode = {
      id,
      type: "jobSource",
      position: position,
      data: { 
        jobSourceLabel: `Source ${nextJobSourceId.current}`,
        distributionProperties: distributionProperties,
        priorityDistribution: priorityDistribution
      },
      style: { width: 80, height: 60 }
    };

    setNodes((nds) => [...nds, newNode]);
    nextJobSourceId.current += 1;
  }, [setNodes, screenToFlowPosition]);

  const addTerminal = useCallback(() => {
    const id = `terminal`;
    const { innerWidth, innerHeight } = window;

    const position = screenToFlowPosition({
      x: innerWidth / 2,
      y: innerHeight / 2,
    });

    const newNode = {
      id,
      type: "terminal",
      position: position,
      data: { 
        label: `Terminals`,
      },
      style: { width: 80, height: 80 }
    };

    setNodes((nds) => [...nds, newNode]);
  }, [setNodes, screenToFlowPosition]);

  const updateServer = useCallback((distributionProperties, queueDiscipline) => {    
    setNodes((nodes) =>
      nodes.map((node) => {
        if (node.id !== selectedElement.id) return node;

        return {
          ...node,
          data: {
            serverLabel: selectedElement.data.serverLabel,
            distributionProperties: distributionProperties,
            queueDiscipline: queueDiscipline
          },
        };
      })
    );
  }, [selectedElement, setNodes]);

  const updateJobSource = useCallback((distributionProperties, priorityDistribution) => {
    setNodes((nodes) =>
      nodes.map((node) => {
        if (node.id !== selectedElement.id) return node;

        return {
          ...node,
          data: {
            jobSourceLabel: selectedElement.data.jobSourceLabel,
            distributionProperties: distributionProperties,
            priorityDistribution: priorityDistribution
          },
        };
      })
    );
  }, [selectedElement, setNodes])

  const setEnvironmentWhenNetworkChanges = useCallback((networkType) => {
    setNodes([]);
    setEdges([]);
    setSelectedElement({});
    nextServerId.current = 1;
    nextJobSourceId.current = 1;

    if(networkType === CLOSED) {
      addTerminal();
    }
  }, [setEdges, setNodes, setSelectedElement, CLOSED, addTerminal])

  return {
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
  };
};