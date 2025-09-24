import { Handle, Position } from "reactflow";
import './CanvasElements.css'
import serverImage from '../../Images/server_image.svg'

function Server({ data }) {
    return (
        <div className="server-container node-container">
            <img src={serverImage} alt="Server" className="node-image" />
            <div className="node-image-label">{data.serverLabel}</div>

            <Handle type="target" position={Position.Left} />
            <Handle type="source" position={Position.Right} />
        </div>
    );
}

export default Server