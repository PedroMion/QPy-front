export const useQueueSimulation = (nodes, edges) => {
  const simulate = () => {
    showLoading();
    const requestJson = mapVariablesToJsonRequest(nodes, edges);
    console.log(requestJson);
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
  }

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
  }

  const showLoading = () => {
    //document.getElementById("main-page-nav-bar-container").style.display = 'none';
    //document.getElementById("main-page-loading-wrapper").style.display = 'flex';
  };

  return {
    simulate
  };
};