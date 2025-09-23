import './Canvas.css';
import Server from "./Server";
import ReactFlow, { Controls, MiniMap } from "reactflow";

function Canvas({nodes}) {
    const nodeTypes = { server: Server };

    return (
        <div className="canvas-container">
            <ReactFlow
                nodes={nodes}
                edges={[]}
                nodeTypes={nodeTypes}
                fitView
            >
            <Controls />
            <MiniMap />
        </ReactFlow>
        </div>
    );
}

export default Canvas;
