const useAuth = () => {
  const setAuthData = ({ expiry, authToken, userId }) => {
    localStorage.setItem('authToken', authToken)
    localStorage.setItem('expiry', expiry)
    localStorage.setItem('userId', userId)
  }

  const getAuthData = () => {
    return {
      authToken: localStorage.getItem('authToken'),
      expiry: +localStorage.getItem('expiry'),
      userId: localStorage.getItem('userId')
    }
  }

  const isAuthenticated = () => {
    const authToken = localStorage.getItem('authToken')

    const expiry = +localStorage?.getItem('expiry')

    const currentTime = new Date().getTime()

    return authToken && expiry && expiry > currentTime
  }

  const getHeaderAuthTokenString = () => {
    return `Bearer ${localStorage.getItem('authToken')}`
  }

  const removeAuthData = () => {
    //* Equivalent to soft logout.
    localStorage.removeItem("authToken");
    localStorage.removeItem("expiry");
    localStorage.removeItem("userId");
  };

  const removeAuthDataAndReload = () => {
    //* Equivalent to hard logout.
    localStorage.removeItem("authToken");
    localStorage.removeItem("expiry");
    localStorage.removeItem("userId");
    window.location.reload();
  };

  return {
    setAuthData,
    getAuthData,
    removeAuthDataAndReload,
    removeAuthData,
    isAuthenticated,
    getHeaderAuthTokenString
  }
}

export default useAuth
