import GenericServerModal from "./Modals/GenericServerModal";

function EditServerModal({ server, updateServer, onModalClosed }) {
    if (!server?.data) return null;

    const handleSubmit = (distribution, queue) => {
        updateServer(distribution, queue);
        onModalClosed();
    };

    return (
        <GenericServerModal
            title="Edit Server"
            submitLabel="Save Changes"
            onSubmit={handleSubmit}
            onCancel={onModalClosed}
        />
    );
}

export default EditServerModal;