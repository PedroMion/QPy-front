import './Canvas.css';
import Server from "./Server";
import ReactFlow, { Controls } from "reactflow";

const nodeTypes = { server: Server };

function Canvas({nodes}) {

    return (
        <div className="canvas-container">
            <ReactFlow
                nodes={nodes}
                edges={[]}
                nodeTypes={nodeTypes}
                className='canvas-react-flow-board'
            >
                <Controls />
            </ReactFlow>
        </div>
    );
}

export default Canvas;
