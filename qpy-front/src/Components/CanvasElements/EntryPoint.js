import { Handle, Position } from "reactflow";
import './CanvasElements.css'
import lambdaImage from '../../Images/lambda_image.png'

function EntryPoint({ data }) {
    return (
        <div className="entry-point-container node-container">
            <div className="node-handle-container">
                <Handle className="node-handle" type="target" position={Position.Left} />
            </div>

            <div className="node-image-container">
                <img src={lambdaImage} alt="Entry Point" className="node-image" />
            </div>

            <div>
                <Handle className="node-handle" type="source" position={Position.Right} />
            </div>
        </div>
    );
}

export default EntryPoint