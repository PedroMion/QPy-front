import { useState } from 'react';
import { useObjectPropertiesModals } from './useObjectPropertiesModals';

export const useQueueSimulation = (nodes, edges) => {
    const [simulationResults, setSimulationResults] = useState({});

    const {
      showLoading,
      finishLoading,
      onShowResultsModal,
    } = useObjectPropertiesModals();
  
    const simulate = () => {
    showLoading();
    
    const requestJson = mapVariablesToJsonRequest(nodes, edges);
    const response = sendRequestToQpy(requestJson);
    
    finishLoading();

    if(isResponseValid(response)) {
        setSimulationResults(response.json)
        onShowResultsModal();
    } else {
        showErrorToUser(response);
    };
  };

  const showErrorToUser = () => {
    //
  };

  const isResponseValid = (response) => {
    return response.status_code === 200;
  };

  const sendRequestToQpy = (requestJson) => {
    // Mock response
    return {
      "status_code": 200,
      "json": {
        "test": "test"
      }
    };
  };

  const mapVariablesToJsonRequest = (nodes, edges) => {
    var devices = getArrivalsAndServersFromNodesData(nodes);
    var connections = getConnectionsFromEdgesData(edges);

    return {
        "devices": devices,
        "connections": connections
    }
  };

  const getArrivalsAndServersFromNodesData = (nodes) => {
    var devices = {"servers": [], "arrivals": []};

    for(const node of nodes) {
        if(node.type === "server") {
            devices.servers.push({
                "device_id": node.id,
                "distribution": node.data.distributionProperties,
                "queue": node.data.queueDiscipline,
            })
        } else {
            devices.arrivals.push({
                "device_id": node.id,
                "distribution": node.data.distributionProperties,
                "priorityDistribution": node.data.priorityDistribution,
            })
        }
    }

    return devices;
  };

  const getConnectionsFromEdgesData = (edges) => {
    var connections = [];

    for(const edge of edges) {
        connections.push({
            "source": edge.source,
            "target": edge.target,
            "routingProbability": edge.data.routingProbability,
        });
    }

    return connections;
  };

  return {
    simulate,
    simulationResults,
  };
};