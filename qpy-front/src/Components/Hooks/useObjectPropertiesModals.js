export const useObjectPropertiesModals = () => {
  const setEnvironmentOnModalOpen = () => {
    document.getElementById("main-page-nav-bar-container").style.display = 'none';
    document.getElementById("main-page-black-screen").style.display = 'flex';
  }

  const setEnvironmentOnModalClose = () => {
    document.getElementById("main-page-nav-bar-container").style.display = 'flex';
    document.getElementById("main-page-black-screen").style.display = 'none';
  }

  const onClickHowToUse = () => {
    setEnvironmentOnModalOpen();
    document.getElementById("main-page-help-wrapper").style.display = 'flex';
  };
  
  const onClickAddServer = () => {
    setEnvironmentOnModalOpen();
    document.getElementById("main-page-server-properties-wrapper").style.display = 'flex';
  };

  const onClickEditServer = () => {
    setEnvironmentOnModalOpen();
    document.getElementById("main-page-edit-server-wrapper").style.display = 'flex';
  }

  const onClickAddJobSource = () => {
    setEnvironmentOnModalOpen();
    document.getElementById("main-page-job-source-properties-wrapper").style.display = 'flex';
  };

  const onClickEditJobSource = () => {
    setEnvironmentOnModalOpen();
    document.getElementById("main-page-edit-job-source-wrapper").style.display = 'flex';
  }

  const onClickSimulate = () => {
    setEnvironmentOnModalOpen();
    document.getElementById("main-page-simulation-properties-wrapper").style.display = 'flex';
  }

  const onModalClosed = () => {
    document.getElementById("main-page-help-wrapper").style.display = 'none';
    document.getElementById("main-page-server-properties-wrapper").style.display = 'none';
    document.getElementById("main-page-job-source-properties-wrapper").style.display = 'none';
    document.getElementById("main-page-edge-properties-wrapper").style.display = 'none';
    document.getElementById("main-page-results-properties-wrapper").style.display = 'none';
    document.getElementById("main-page-edit-server-wrapper").style.display = 'none';
    document.getElementById("main-page-edit-job-source-wrapper").style.display = 'none';
    document.getElementById("main-page-simulation-properties-wrapper").style.display = 'none';
    document.getElementById('main-page-error-modal-wrapper').style.display = 'none';
    document.getElementById("main-page-loading-wrapper").style.display = 'none';
    setEnvironmentOnModalClose();
  };

  const onShowResultsModal = () => {
    onModalClosed();

    setEnvironmentOnModalOpen();
    document.getElementById("main-page-results-properties-wrapper").style.display = 'flex';
  };

  const onError = () => {
    onModalClosed();
  }

  const showLoading = () => {
    onModalClosed();
    setEnvironmentOnModalOpen();
    
    document.getElementById("main-page-loading-wrapper").style.display = 'flex';    
  };

  const finishLoading = () => {
    document.getElementById("main-page-loading-wrapper").style.display = 'none';
    setEnvironmentOnModalClose();
  };

  return {
    onClickHowToUse,
    onClickAddServer,
    onClickAddJobSource,
    onClickEditServer,
    onClickEditJobSource,
    onClickSimulate,
    onModalClosed,
    onShowResultsModal,
    showLoading,
    finishLoading,
    onError,
  };
};