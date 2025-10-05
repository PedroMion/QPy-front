import { Handle, Position } from "@xyflow/react";
import './CanvasElements.css'
import lambdaImage from '../../Images/lambda_image.png'

function EntryPoint({ data }) {
    return (
        <div className="entry-point-container node-container">
            <div className="node-image-container">
                <img src={lambdaImage} alt="Entry Point" className="node-image" />
            </div>

            <Handle className="node-handle" type="source" position={Position.Right} />
        </div>
    );
}

export default EntryPoint