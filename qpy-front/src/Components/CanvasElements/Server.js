import { Handle, Position } from "reactflow";
import './CanvasElements.css'
import serverImage from '../../Images/server_image.svg'

function Server({ data }) {
    return (
        <div className="server-container node-container">
            <Handle className="node-handle node-handle-target" type="target" position={Position.Left} />

            <div className="node-image-container">
                <img src={serverImage} alt="Server" className="node-image" />
                <div className="node-image-label">{data.serverLabel}</div>
            </div>

            <Handle className="node-handle node-handle-source" type="source" position={Position.Right} />
        </div>
    );
}

export default Server