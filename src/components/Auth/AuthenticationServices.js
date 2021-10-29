import axios from "axios";

class AuthenticationServices {
  creatBasicAuthToken(username, password) {
    return "Basic " + window.btoa(`${username}:${password}`);
  }

  executeBasicsAuthenticatedService(username, password) {
    return axios.get("http://localhost:8080/basicAuth", {
      headers: {
        Authorization: this.creatBasicAuthToken(username, password),
      },
    });
  }

  registerSuccessfulLogin(username, password) {
    // let basicAuthHeaderString =
    //   "Basic " + window.btoa(`${username}:${password}`);

    sessionStorage.setItem("authenticatedUser", username);
    this.setupAxiosInterceptors(this.creatBasicAuthToken(username, password));
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

  setupAxiosInterceptors(basicAuthHeaderString) {
    axios.interceptors.request.use((config) => {
      if (this.isUserLoggedIn()) {
        config.headers.Authorization = basicAuthHeaderString;
      }
      return config;
    });
  }
}

export default new AuthenticationServices();
