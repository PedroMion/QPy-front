import './Canvas.css';
import EntryPoint from '../CanvasElements/EntryPoint';
import Server from "../CanvasElements/Server";
import ReactFlow, { Background } from "reactflow";

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
                panOnDrag={false}
                zoomOnPinch={false}
                zoomOnScroll={false}
                className='canvas-react-flow-board'
                defaultEdgeOptions={{
                    type: 'step',
                    style: { stroke: 'white', strokeWidth: 2 }
                }}
            >
            </ReactFlow>
        </div>
    );
}

export default Canvas;
