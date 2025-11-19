import { useState } from 'react';
import { toast } from 'react-toastify';
import DistributionSection from '../Sections/DistributionSection';
import QueueDisciplineSection from '../Sections/QueueDisciplineSection';
import '../ObjectProperties.css';

function GenericServerModal({
  title,
  submitLabel,
  onSubmit,
  onCancel,
}) {
  const [distributionProperties, setDistributionProperties] = useState({});
  const [queueProperties, setQueueProperties] = useState({});
  const [resetFlag, setResetFlag] = useState(0);

  const validateField = (data) => Object.values(data.params).every(v => v !== "");

  const handleSubmit = () => {
    if (!validateField(distributionProperties) || !validateField(queueProperties)) {
      toast.error("Please fill all fields.");
      return;
    }
    onSubmit(distributionProperties, queueProperties);
    setResetFlag(resetFlag + 1);
  };

  return (
    <div className="object-properties-container">
      <div className="object-properties-header">
        <div className="object-properties-header-text">{title}</div>
        <div className="object-properties-header-button" onClick={onCancel}>X</div>
      </div>

      <DistributionSection
        sectionTitle="Service Distribution:"
        setDistributionProperties={setDistributionProperties}
        resetFlag={resetFlag}
      />

      <QueueDisciplineSection
        setQueueProperties={setQueueProperties}
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

export default GenericServerModal;