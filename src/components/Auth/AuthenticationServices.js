class AuthenticationServices {
  registerSuccessfulLogin(username, password) {
    sessionStorage.setItem("authenticatedUser", username);
  }

  logout() {
    sessionStorage.removeItem("authenticatedUser");
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem("authenticatedUser");
    if (user) return true;
    return false;
  }

  getLoggedInUsername() { 
    let user = sessionStorage.getItem("authenticatedUser");
    if (user === null) return "";
    return user;
  }
}

export default new AuthenticationServices();
