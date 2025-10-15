import { Handle, Position } from "@xyflow/react";
import './CanvasElements.css'
import lambdaImage from '../../Images/terminals.svg'

function Terminal({ data }) {
    return (
        <div className="terminal-container node-container">
            <div className="node-image-container">
                <img src={lambdaImage} alt="Terminals" className="node-image" />
                <div className="node-image-label">{data.label}</div>
            </div>

            <Handle className="node-handle" type="source" position={Position.Right} />
        </div>
    );
}

export default Terminal