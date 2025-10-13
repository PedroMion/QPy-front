import GenericJobSourceModal from "./GenericJobSourceModal";

function EditJobSourceProperties({ jobSource, updateJobSource, onModalClosed }) {
    if (!jobSource?.data) return null;

    const handleSubmit = (distributionProperties, priorityDistribution) => {
        updateJobSource(distributionProperties, priorityDistribution);
        onModalClosed();
    };

    return (
        <GenericJobSourceModal
            title="Edit Job Source"
            submitLabel="Save Changes"
            onSubmit={handleSubmit}
            onCancel={onModalClosed}
        />
    );
}

export default EditJobSourceProperties;