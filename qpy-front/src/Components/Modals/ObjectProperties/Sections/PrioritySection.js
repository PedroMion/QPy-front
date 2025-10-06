import { useState } from "react";

function PrioritySection({ setPriorityDistribution }) {
    const [hasPriority, setHasPriority] = useState(false);
    const [pairs, setPairs] = useState([{ key: 0, prob: "" }]);

    const handleChange = (index, field, value) => {
        const newPairs = [...pairs];
        newPairs[index][field] = field === "key" ? parseInt(value, 10) : parseFloat(value);
        setPairs(newPairs);
        setPriorityDistribution(newPairs);
    };

    const addPair = () => {
        setPairs([...pairs, { key: 0, prob: "" }]);
    };

    const removePair = (index) => {
        setPairs(pairs.filter((_, i) => i !== index));
    };

    return (
        <div className="priority-section-container">
            <div className='object-properties-element'>
                <span className='object-properties-element-text'>Priority Distribution:</span>
                <input type="checkbox" className='object-properties-element-input'
                       onChange={(e) => setHasPriority(e.target.checked)} />
            </div>

            {hasPriority && (
                <div className="object-properties-multiple-element-container">
                {pairs.map((pair, index) => (
                    <div key={index} className="object-properties-element">
                        <input
                            type="number"
                            min="0"
                            value={pair.key}
                            onChange={(e) => handleChange(index, "key", e.target.value)}
                            placeholder="Chave"
                        />
                        <input
                            type="number"
                            step="0.01"
                            min="0"
                            max="1"
                            value={pair.prob}
                            onChange={(e) => handleChange(index, "prob", e.target.value)}
                            placeholder="Probability"
                        />
                        <button className='object-properties-button' onClick={() => removePair(index)}>Remove</button>
                    </div>
                ))}
                    <div className="object-properties-button-container">
                        <button onClick={addPair} className='object-properties-button'>Add Pair</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PrioritySection;
