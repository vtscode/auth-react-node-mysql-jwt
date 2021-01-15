const LocalStorageService = (keyItem) => {
  const _setToken = (params) => {
    localStorage.setItem(keyItem, JSON.stringify(params));
  };

  const _getAccessToken = () => {
    return JSON.parse(localStorage.getItem(keyItem)) || null;
  };

  const _clearToken = () => {
    localStorage.removeItem(keyItem);
  };

  return {
    setToken : _setToken,
    clearToken : _clearToken,
    getAccessToken : _getAccessToken,
  };
};

export default LocalStorageService;