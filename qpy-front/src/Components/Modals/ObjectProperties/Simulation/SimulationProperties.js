import '../ObjectProperties.css';
import DistributionSection from '../Sections/DistributionSection';
import PriorityDistributionSection from '../Sections/PriorityDistributionSection'
import { useState } from 'react';
import { toast } from 'react-toastify';
import { CLOSED } from '../../../../Constants/networkConstants';

function SimulationProperties({ 
    onModalClosed,
    networkType,
    simulate, 
    time, 
    setTime, 
    warmup, 
    setWarmup,
    numberOfTerminals,
    setNumberOfTerminals,
    thinkTimeDistribution,
    setThinkTimeDistribution,
    setTerminalsPriorityDistribution
}) {
    const onCancel = () => {
        setTime(1000);
        setWarmup(0);
        setNumberOfTerminals(1);
        setResetFlag(resetFlag + 1);
        onModalClosed();
    };

    const validateField = (data) => Object.values(data.params).every(v => v !== "");

    const handleSubmit = () => {
        if (networkType === CLOSED && !validateField(thinkTimeDistribution)) {
            toast.error("Please fill all fields.");
            return;
        }
        setResetFlag(resetFlag + 1);
        simulate();
    };

    const [resetFlag, setResetFlag] = useState(0);

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

            {networkType === CLOSED && (
                    <>
                        <div className="object-properties-section-container">
                            <div className="object-properties-element">
                                <span className="object-properties-element-text">Number of Terminals:</span>
                                <input
                                    type="number"
                                    min="0"
                                    step="1"
                                    className="object-properties-element-input"
                                    value={numberOfTerminals}
                                    onChange={(e) => setNumberOfTerminals(e.target.value)}
                                />
                            </div>
                        </div>

                        <DistributionSection
                            sectionTitle="Think Time Distribution:"
                            setDistributionProperties={setThinkTimeDistribution}
                            resetFlag={resetFlag}
                        />
                        
                        <PriorityDistributionSection 
                            setPriorityDistribution={setTerminalsPriorityDistribution}
                            resetFlag={resetFlag}
                        />
                    </>
                )}

            <div className="object-properties-button-container">
                <div className="object-properties-button" onClick={handleSubmit}>
                    Simulate
                </div>
            </div>
        </div>
    );
}

export default SimulationProperties;