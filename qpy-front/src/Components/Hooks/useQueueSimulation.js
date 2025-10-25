import { useState } from 'react';
import { useObjectPropertiesModals } from './useObjectPropertiesModals';
import { useRequests } from './useRequests';
import { getScaledDistribution } from '../Utils/DistributionUtils';

export const useQueueSimulation = (nodes, edges, getNetworkConfiguration) => {
  const [time, setTime] = useState(1000);
  const [warmup, setWarmup] = useState(0);
  
  const [simulationResults, setSimulationResults] = useState({});

  const {
    showLoading,
    finishLoading,
    onShowResultsModal,
    onError,
  } = useObjectPropertiesModals();

  const {
    simulateNetwork,
  } = useRequests();

  const simulate = async () => {
    showLoading();

    const requestJson = mapVariablesToJsonRequest(nodes, edges);
    const response = await simulateNetwork(requestJson);

    console.log(response);

    finishLoading();

    if(isResponseValid(response)) {
      setSimulationResults(response)
      onShowResultsModal();
    } else {
      showErrorToUser();
    };
  };

  const showErrorToUser = () => {
    onError();
  };

  const isResponseValid = (response) => {
    return response !== null;
  };

  const mapVariablesToJsonRequest = (nodes, edges) => {
    var devices = getArrivalsAndServersFromNodesData(nodes);
    var connections = getConnectionsFromEdgesData(edges);
    var networkParameters = getNetworkParametersFromVariables();
    var terminalsConfiguration = getTerminalsConfiguration();

    const result = {
      "networkParameters": networkParameters,
      "networkConfiguration": getNetworkConfiguration(),
      "devices": devices,
      "connections": connections,
    };

    if(terminalsConfiguration !== null) {
      result.terminalsConfiguration = terminalsConfiguration;
    }

    return result;
  };

  const getTerminalsConfiguration = () => {
    var terminalsConfiguration = {"routes": [], "priorityDistribution": null};

    for(var conn of edges) {
      if(conn.source === "terminal") {
        terminalsConfiguration.routes.push({'target': conn.target, 'routingProbability': conn.data.routingProbability});
      }
    }

    if(terminalsConfiguration.routes.length > 0) {
      // Add prob
      return terminalsConfiguration;
    }

    return null;
  }

  const getNetworkParametersFromVariables = () => {
    return {
      "simulationTime": time,
      "warmupTime": warmup
    };
  };

  const getArrivalsAndServersFromNodesData = (nodes) => {
    var devices = {"servers": [], "arrivals": []};

    for(const node of nodes) {
      if(node.type === "server") {
        devices.servers.push({
          "deviceId": node.id,
          "distribution": node.data.distributionProperties,
          "queue": node.data.queueDiscipline,
        })
      } else if(node.type === "jobSource") {
        var destinations = getDestinationsFromArrival(node);
        
        for(const dest of destinations.destinations) {
          devices.arrivals.push({
            "deviceId": node.id,
            "destination": dest,
            "distribution": destinations.distribution,
            "priorityDistribution": node.data.priorityDistribution,
          })
        }
      }
    }

    return devices;
  };

  const getDestinationsFromArrival = (arrival) => {
    var responseObject = {'destinations': [], 'distribution': arrival.distributionProperties};

    for(const conn of edges) {
      if(conn.source === arrival.id) {
        responseObject.destinations.push(conn.target);
      }
    }

    const num = responseObject.destinations.length;
    responseObject.distribution = getScaledDistribution(arrival.data.distributionProperties, num);

    return responseObject;
  };

  const getConnectionsFromEdgesData = (edges) => {
    var connections = [];

    for(const edge of edges) {
      if(originIsNotServer(edge.source)) continue;

      connections.push({
        "source": edge.source,
        "target": edge.target,
        "routingProbability": edge.data.routingProbability,
      });
    }

    return connections;
  };

  const originIsNotServer = (source) => {
    return !source.startsWith('server');
  }

  return {
    time,
    setTime,
    warmup,
    setWarmup,
    simulate,
    simulationResults,
  };
};