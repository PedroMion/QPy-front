import GenericEntryPointModal from "./GenericEntryPointModal";

function EditEntryPointProperties({ entryPoint, updateEntryPoint, onModalClosed }) {
    if (!entryPoint?.data) return null;

    const handleSubmit = (distributionProperties, priorityDistribution) => {
        updateEntryPoint(distributionProperties, priorityDistribution);
        onModalClosed();
    };

    return (
        <GenericEntryPointModal
            title="Edit Entry Point"
            submitLabel="Save Changes"
            onSubmit={handleSubmit}
            onCancel={onModalClosed}
        />
    );
}

export default EditEntryPointProperties;