import GenericServerModal from "./GenericServerModal";

function AddServerProperties({ addServer, onModalClosed }) {
  const handleSubmit = (distribution, queue) => {
    addServer(distribution, queue);
    onModalClosed();
  };

  return (
    <GenericServerModal
      title="Configure Server"
      submitLabel="Add Server"
      onSubmit={handleSubmit}
      onCancel={onModalClosed}
    />
  );
}

export default AddServerProperties;