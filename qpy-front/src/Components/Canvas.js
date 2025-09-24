import './Canvas.css';
import EntryPoint from './EntryPoint';
import Server from "./Server";
import ReactFlow, { Controls } from "reactflow";

const nodeTypes = { server: Server, entryPoint: EntryPoint };

function Canvas({nodes, onNodesChange, onNodesDelete }) {

    return (
        <div className="canvas-container">
            <ReactFlow
                nodes={nodes}
                edges={[]}
                nodeTypes={nodeTypes}
                onNodesChange={onNodesChange}
                onNodesDelete={deleted => onNodesDelete(deleted)}
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
