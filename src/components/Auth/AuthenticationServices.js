class AuthenticationServices {
  registerSuccessfulLogin(username, password) {
    console.log("Successfully Logged In");
    sessionStorage.setItem("authenticatedUser", username);
  }

  logout() {
    console.log("Successfully Logged Out");
    sessionStorage.removeItem("authenticatedUser");
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem("authenticatedUser");

    if (user) return true;
    
    return false;
  }
}

export default new AuthenticationServices();
