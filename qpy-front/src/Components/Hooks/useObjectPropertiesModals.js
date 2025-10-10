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

  const onClickAddEntryPoint = () => {
    setEnvironmentOnModalOpen();
    document.getElementById("main-page-entry-point-properties-wrapper").style.display = 'flex';
  };

  const onModalClosed = () => {
    document.getElementById("main-page-server-properties-wrapper").style.display = 'none';
    document.getElementById("main-page-entry-point-properties-wrapper").style.display = 'none';
    document.getElementById("main-page-edge-properties-wrapper").style.display = 'none';
    document.getElementById("main-page-results-properties-wrapper").style.display = 'none';
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
    onClickAddEntryPoint,
    onModalClosed,
    onShowResultsModal,
    showLoading,
    finishLoading
  };
};