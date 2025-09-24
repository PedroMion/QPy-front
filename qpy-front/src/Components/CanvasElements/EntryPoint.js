import { Handle, Position } from "reactflow";
import './CanvasElements.css'
import lambdaImage from '../../Images/lambda_image.png'

function EntryPoint({ data }) {
    return (
        <div className="entry-point-container node-container">
            <img src={lambdaImage} alt="Entry Point" className="node-image" />

            <Handle className="node-handle" type="target" position={Position.Left} />
            <Handle className="node-handle" type="source" position={Position.Right} />
        </div>
    );
}

export default EntryPoint