import { Handle, Position } from "reactflow";
import './EntryPoint.css'
import lambdaImage from '../Images/lambda_image.png'

function EntryPoint({ data }) {
    return (
        <div className="entry-point-container">
            <img src={lambdaImage} alt="Entry Point" className="entry-point-image" />

            <Handle type="target" position={Position.Left} />
            <Handle type="source" position={Position.Right} />
        </div>
    );
}

export default EntryPoint