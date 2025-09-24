import { Handle, Position } from "reactflow";
import './Server.css'
import serverImage from '../Images/server_image.svg'

function Server({ data }) {
    return (
        <div className="server-container">
            <img src={serverImage} alt="Server" className="server-image" />
            <div className="server-image-label">{data.serverLabel}</div>

            <Handle type="target" position={Position.Left} />
            <Handle type="source" position={Position.Right} />
        </div>
    );
}

export default Server