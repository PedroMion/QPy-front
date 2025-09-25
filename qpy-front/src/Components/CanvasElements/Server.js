import { Handle, Position } from "reactflow";
import './CanvasElements.css'
import serverImage from '../../Images/server_image.svg'

function Server({ data }) {
    return (
        <div className="server-container node-container">
            <div className="node-handle-container">
                <Handle className="node-handle" type="target" position={Position.Left} />
            </div>

            <div className="node-image-container">
                <img src={serverImage} alt="Server" className="node-image" />
                <div className="node-image-label">{data.serverLabel}</div>
            </div>

            <div className="node-handle-container">
                <Handle className="node-handle" type="source" position={Position.Right} />
            </div>
        </div>
    );
}

export default Server