import { Handle, Position } from "@xyflow/react";
import './CanvasElements.css'
import lambdaImage from '../../Images/lambda_image.png'

function JobSource({ data }) {
    return (
        <div className="job-source-container node-container">
            <div className="node-image-container">
                <img src={lambdaImage} alt="Source" className="node-image" />
                <div className="node-image-label">{data.sourceLabel}</div>
            </div>

            <Handle className="node-handle" type="source" position={Position.Right} />
        </div>
    );
}

export default JobSource