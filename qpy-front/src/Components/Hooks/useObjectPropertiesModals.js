export const useObjectPropertiesModals = () => {
  const onClickAddServer = () => {
    document.getElementById("main-page-server-properties-wrapper").style.display = 'flex';
    document.getElementById("main-page-nav-bar-container").style.display = 'none';
  };

  const onClickAddEntryPoint = () => {
    document.getElementById("main-page-entry-point-properties-wrapper").style.display = 'flex';
    document.getElementById("main-page-nav-bar-container").style.display = 'none';    
  }

  const onModalClosed = () => {
    document.getElementById("main-page-server-properties-wrapper").style.display = 'none';
    document.getElementById("main-page-entry-point-properties-wrapper").style.display = 'none';    
    document.getElementById("main-page-nav-bar-container").style.display = 'flex';
  }
  

  return {
    onClickAddServer,
    onClickAddEntryPoint,
    onModalClosed,
  };
};