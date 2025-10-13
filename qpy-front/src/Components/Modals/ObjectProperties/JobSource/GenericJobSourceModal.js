import { useState } from "react";
import "../ObjectProperties.css";
import DistributionSection from "../Sections/DistributionSection";
import PriorityDistributionSection from "../Sections/PriorityDistributionSection";

function GenericJobSourceModal({
    title,
    submitLabel,
    onSubmit,
    onCancel,
}) {
    const [distributionProperties, setDistributionProperties] = useState({});
    const [priorityDistribution, setPriorityDistribution] = useState(false);
    const [resetFlag, setResetFlag] = useState(0);

    const validateField = (data) => {
        return Object.values(data.params).every((value) => value !== "");
    };

    const handleSubmit = () => {
        if (!validateField(distributionProperties)) {
            alert("Please enter valid distribution information.");
            return;
        }

        onSubmit(distributionProperties, priorityDistribution);
        setResetFlag(resetFlag + 1);
    };

    return (
        <div className="object-properties-container">
            <div className="object-properties-header">
                <div className="object-properties-header-text">{title}</div>
            
                <div className="object-properties-header-button" onClick={onCancel}>
                    X
                </div>
            </div>

            <DistributionSection
                sectionTitle="Arrival Distribution:"
                setDistributionProperties={setDistributionProperties}
                resetFlag={resetFlag}
            />

            <PriorityDistributionSection
                setPriorityDistribution={setPriorityDistribution}
                resetFlag={resetFlag}
            />

            <div className="object-properties-button-container">
                <div className="object-properties-button" onClick={handleSubmit}>
                    {submitLabel}
                </div>
            </div>
        </div>
    );
}

export default GenericJobSourceModal;