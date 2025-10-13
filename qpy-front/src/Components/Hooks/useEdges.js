import { useState } from "react";

export const useEdges = (onConnect) => {
    const [edgeProperties, setEdgeProperties] = useState({});

    const addEdge = (connection) => {
      onConnect(connection, null);
    }

    const originIsJobSource = (source) => {
      return source.startsWith('job');
    }

    const onAddEdge = (edgeData) => {
      if(originIsJobSource(edgeData.source)) {
        addEdge(edgeData);
      } else {
        setEdgeProperties(edgeData);
      
        document.getElementById("main-page-edge-properties-wrapper").style.display = 'flex';
        document.getElementById("main-page-nav-bar-container").style.display = 'none';   
      }
      
  }

  return {
    edgeProperties,
    onAddEdge,
  };
};