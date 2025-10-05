import { useState } from "react";

export const useEdges = () => {
    const [edgeProperties, setEdgeProperties] = useState({});
  
    const onAddEdge = (edgeData) => {
        setEdgeProperties(edgeData);
    
        document.getElementById("main-page-edge-properties-wrapper").style.display = 'flex';
        document.getElementById("main-page-nav-bar-container").style.display = 'none';   
  }

  return {
    edgeProperties,
    onAddEdge,
  };
};