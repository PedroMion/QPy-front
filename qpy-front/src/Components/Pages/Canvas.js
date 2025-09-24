import './Canvas.css';
import EntryPoint from '../CanvasElements/EntryPoint';
import Server from "../CanvasElements/Server";
import ReactFlow, { Controls } from "reactflow";

const nodeTypes = { server: Server, entryPoint: EntryPoint };

function Canvas({nodes, onNodesChange, onNodesDelete, edges, onEdgesChange, onConnect }) {

    return (
        <div className="canvas-container">
            <ReactFlow
                nodes={nodes}
                nodeTypes={nodeTypes}
                onNodesChange={onNodesChange}
                onNodesDelete={deleted => onNodesDelete(deleted)}
                edges={edges}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                deleteKeyCode={['Delete', 'Backspace']}
                nodesDraggable={true}
                panOnDrag={true}
                zoomOnPinch={true}
                zoomOnScroll={true}
                className='canvas-react-flow-board'
            >
                <Controls />
            </ReactFlow>
        </div>
    );
}

export default Canvas;
