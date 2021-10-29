import axios from "axios";
import { API_URL } from "../../Constant";

export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

class AuthenticationServices {
  creatBasicAuthToken(username, password) {
    return "Basic " + window.btoa(`${username}:${password}`);
  }

  createJwtToken(token) {
    return "Bearer " + token;
  }

  executeBasicsAuthenticatedService(username, password) {
    return axios.get(`${API_URL}/basicAuth`, {
      headers: {
        Authorization: this.creatBasicAuthToken(username, password),
      },
    });
  }

  executeJwtAuthenticatedService(username, password) {
    return axios.post(`${API_URL}/authenticate`, {
      username,
      password
    });
  }

  registerSuccessfulLogin(username, password) {
    // let basicAuthHeaderString =
    //   "Basic " + window.btoa(`${username}:${password}`);

    sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);
    this.setupAxiosInterceptors(this.creatBasicAuthToken(username, password));
  }

  registerSuccessfulLoginForJwt(username, token) {
    sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);
    this.setupAxiosInterceptors(this.createJwtToken(token));
  }

  logout() {
    sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
    if (user) return true;
    return false;
  }

  getLoggedInUsername() {
    let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
    if (user === null) return "";
    return user;
  }

  setupAxiosInterceptors(token) {
    axios.interceptors.request.use((config) => {
      if (this.isUserLoggedIn()) {
        config.headers.Authorization = token;
      }
      return config;
    });
  }
}

export default new AuthenticationServices();
