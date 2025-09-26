import { Handle, Position } from "reactflow";
import './CanvasElements.css'
import lambdaImage from '../../Images/lambda_image.png'

function EntryPoint({ data }) {
    return (
        <div className="entry-point-container node-container">
            <Handle className="node-handle node-handle-target" type="target" position={Position.Left} />

            <div className="node-image-container">
                <img src={lambdaImage} alt="Entry Point" className="node-image" />
            </div>

            <Handle className="node-handle node-handle-source" type="source" position={Position.Right} />
        </div>
    );
}

export default EntryPoint