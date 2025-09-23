import { Handle, Position } from "reactflow";
import serverImage from '../Images/serverImage.png'

function Server({ serverLabel }) {
    return (
        <div className="server-container">
            <img src={serverImage} alt="Server" />
            <span>{serverLabel}</span>

            <Handle type="target" position={Position.Left} />
            <Handle type="source" position={Position.Right} />
        </div>
    );
}

export default Server