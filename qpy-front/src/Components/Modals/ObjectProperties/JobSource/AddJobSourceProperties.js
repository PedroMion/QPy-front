import GenericJobSourceModal from './GenericJobSourceModal';

function AddJobSourceProperties({addJobSource, onModalClosed}) {
  const handleSubmit = (distributionProperties, priorityDistribution) => {
    addJobSource(distributionProperties, priorityDistribution);
    onModalClosed();
  };

  return (
    <GenericJobSourceModal
      title="Configure Job Source"
      submitLabel="Add Job Source"
      onSubmit={handleSubmit}
      onCancel={onModalClosed}
    />
  );
}

export default AddJobSourceProperties;