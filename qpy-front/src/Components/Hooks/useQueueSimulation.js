import { useState } from 'react';
import { useObjectPropertiesModals } from './useObjectPropertiesModals';
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
    onError();
  };

  const isResponseValid = (response) => {
    return response.status_code === 200;
  };

  const sendRequestToQpy = (requestJson) => {
    console.log(JSON.stringify(requestJson));
    // Mock response
    return {
      "status_code": 200,
      "json": {
        "environment": {
          "processedJobs": 5000,
          "averageTimeInSystem": 2.5,
          "averageQueueTime": 1.1,
          "averageNumberOfJobs": 1.5,
          "throughput": 1.5,
          "maxDemand": 2
        },
        "servers": [
          {
            "serverId": "server-1",
            "processedJobs": 5000,
            "averageTimeInServer": 2.5,
            "averageQueueTime": 1.1,
            "averageNumberOfJobs": 1.5,
            "averageVisitsPerJob": 1,
            "utilization": 0.8,
            "throughput": 1.5,
            "demand": 2
          },
          {
            "serverId": "server-2",
            "processedJobs": 2500,
            "averageTimeInServer": 1.34,
            "averageQueueTime": 0.3,
            "averageNumberOfJobs": 0.5,
            "averageVisitsPerJob": 0.54,
            "utilization": 0.23,
            "throughput": 1.12,
            "demand": 1.01
          }
        ],
        "priority": [
          {
            "priority": 2,
            "processedJobs": 500,
            "averageTimeInSystem": 1.2,
            "averageQueueTime": 0.6,
          },
          {
            "priority": 1,
            "processedJobs": 4500,
            "averageTimeInSystem": 2.7,
            "averageQueueTime": 1.6,
          }
        ]
      }
    };
  };

  const mapVariablesToJsonRequest = (nodes, edges) => {
    var devices = getArrivalsAndServersFromNodesData(nodes);
    var connections = getConnectionsFromEdgesData(edges);
    var networkParameters = getNetworkParametersFromVariables();

    return {
      "networkParameters": networkParameters,
      "networkConfiguration": getNetworkConfiguration(),
      "devices": devices,
      "connections": connections
    }
  };

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
      } else {
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
      if(originIsJobSource(edge.source)) continue;

      connections.push({
        "source": edge.source,
        "target": edge.target,
        "routingProbability": edge.data.routingProbability,
      });
    }

    return connections;
  };

  const originIsJobSource = (source) => {
    return source.startsWith('job');
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