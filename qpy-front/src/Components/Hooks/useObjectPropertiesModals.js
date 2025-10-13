export const useObjectPropertiesModals = () => {
  const setEnvironmentOnModalOpen = () => {
    document.getElementById("main-page-nav-bar-container").style.display = 'none';
    document.getElementById("main-page-black-screen").style.display = 'flex';
  }

  const setEnvironmentOnModalClose = () => {
    document.getElementById("main-page-nav-bar-container").style.display = 'flex';
    document.getElementById("main-page-black-screen").style.display = 'none';
  }
  
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

  const onModalClosed = () => {
    document.getElementById("main-page-server-properties-wrapper").style.display = 'none';
    document.getElementById("main-page-job-source-properties-wrapper").style.display = 'none';
    document.getElementById("main-page-edge-properties-wrapper").style.display = 'none';
    document.getElementById("main-page-results-properties-wrapper").style.display = 'none';
    document.getElementById("main-page-edit-server-wrapper").style.display = 'none';
    document.getElementById("main-page-edit-job-source-wrapper").style.display = 'none';
    setEnvironmentOnModalClose();
  };

  const onShowResultsModal = () => {
    onModalClosed();

    setEnvironmentOnModalOpen();
    document.getElementById("main-page-results-properties-wrapper").style.display = 'flex';
  };

  const showLoading = () => {
    //document.getElementById("main-page-nav-bar-container").style.display = 'none';
    //document.getElementById("main-page-loading-wrapper").style.display = 'flex';
  };

  const finishLoading = () => {
    //document.getElementById("main-page-nav-bar-container").style.display = 'none';
    //document.getElementById("main-page-loading-wrapper").style.display = 'flex';
  };

  return {
    onClickAddServer,
    onClickAddJobSource,
    onClickEditServer,
    onClickEditJobSource,
    onModalClosed,
    onShowResultsModal,
    showLoading,
    finishLoading
  };
};