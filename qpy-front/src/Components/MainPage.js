import React, { useState } from "react";
import './MainPage.css';
import Canvas from './Canvas';
import NavBar from './NavBar';

function MainPage() {
  const [nodes, setNodes] = useState([]);
  const [nextId, setNextId] = useState(1);

  const addServer = () => {
    const id = `server-${nextId}`;
    setNodes([
      ...nodes,
      {
        id,
        type: "server",
        position: { x: 100, y: 100 },
        data: { serverLabel: `Server ${nextId}` },
        draggable: true,
        style: { width: 60, height: 80 }
      },
    ]);
    setNextId(nextId + 1);
  };

  return (
    <div className="main-page-container">
        <div className='main-page-nav-bar-container'>
          <NavBar onClickAddServer={addServer} />
        </div>

        <Canvas nodes={nodes} />
    </div>
  );
}

export default MainPage;
