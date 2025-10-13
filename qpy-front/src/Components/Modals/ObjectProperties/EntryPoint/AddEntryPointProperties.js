import GenericEntryPointModal from './GenericEntryPointModal';

function AddEntryPointProperties({addEntryPoint, onModalClosed}) {
  const handleSubmit = (distributionProperties, priorityDistribution) => {
    addEntryPoint(distributionProperties, priorityDistribution);
    onModalClosed();
  };

  return (
    <GenericEntryPointModal
      title="Configure Entry Point"
      submitLabel="Add Entry Point"
      onSubmit={handleSubmit}
      onCancel={onModalClosed}
    />
  );
}

export default AddEntryPointProperties;