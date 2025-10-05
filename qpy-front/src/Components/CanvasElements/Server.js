import { Handle, Position } from "@xyflow/react";
import './CanvasElements.css'
import serverImage from '../../Images/server_image.svg'

function Server({ data }) {
    return (
        <div className="server-container node-container">
            <Handle className="node-handle" type="target" position={Position.Left} />

            <div className="node-image-container">
                <img src={serverImage} alt="Server" className="node-image" />
                <div className="node-image-label">{data.serverLabel}</div>
            </div>

            <Handle className="node-handle" type="source" position={Position.Right} />
        </div>
    );
}

export default Server