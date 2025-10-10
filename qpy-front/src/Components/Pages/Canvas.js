import './Canvas.css';
import '@xyflow/react/dist/style.css';
import EntryPoint from '../CanvasElements/EntryPoint';
import Server from '../CanvasElements/Server';
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
} from '@xyflow/react';

const nodeTypes = {
  server: Server,
  entryPoint: EntryPoint,
};

function Canvas({
  nodes,
  edges,
  onNodesChange,
  onEdgesChange,
  onConnect,
  onNodeClick,
  onEdgeClick,
  onNodesDelete,
}) {
  return (
    <div className="canvas-wrapper">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={onNodeClick}
        onEdgeClick={onEdgeClick}
        onNodesDelete={onNodesDelete}
        fitView
        defaultEdgeOptions={{
          type: 'step',
          style: { stroke: 'white', strokeWidth: 2 },
        }}
        proOptions={{ hideAttribution: true }}
        panOnDrag
        zoomOnScroll
        zoomOnPinch
        className="canvas-react-flow-board"
      >
        <Background color="#71797E" gap={20} />
        <Controls />
        <MiniMap maskColor="rgba(0,0,0,0.3)" pannable zoomable />
      </ReactFlow>
    </div>
  );
}

export default Canvas;