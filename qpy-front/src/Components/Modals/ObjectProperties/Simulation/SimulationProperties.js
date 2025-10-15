import '../ObjectProperties.css';

function SimulationProperties({ onModalClosed, simulate, time, setTime, warmup, setWarmup }) {
    const onCancel = () => {
        setTime(1000);
        setWarmup(0);
        onModalClosed();
    };

    return (
        <div className="object-properties-container">
            <div className="object-properties-header">
                <div className="object-properties-header-text">Simulation Properties</div>
                <div className="object-properties-header-button" onClick={onCancel}>X</div>
            </div>

            <div className="object-properties-section-container">

                <div className="object-properties-element">
                    <span className="object-properties-element-text">Simulation Time (s):</span>
                    <input
                        type="number"
                        min="0"
                        step="1000"
                        className="object-properties-element-input"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                    />
                </div>
            </div>

            <div className="object-properties-section-container">
                <div className="object-properties-element">
                    <span className="object-properties-element-text">Warmup Time (s):</span>
                    <input
                        type="number"
                        min="0"
                        step="1000"
                        className="object-properties-element-input"
                        value={warmup}
                        onChange={(e) => setWarmup(e.target.value)}
                    />
                </div>
            </div>

            <div className="object-properties-button-container">
                <div className="object-properties-button" onClick={simulate}>
                    Simulate
                </div>
            </div>
        </div>
    );
}

export default SimulationProperties;