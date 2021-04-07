import AxiosInterceptor from "../../axios/AxiosInterceptor";
import axios from "../../axios/axios-config.js";
class AuthenticationService {
  registerSuccessfulLogin(username, password) {
    sessionStorage.setItem("authenticatedUser", username);
    AxiosInterceptor.setUpAxiosInterceptor(
      this.createBasicAuthToken(username, password)
    );
  }
  logout() {
    sessionStorage.removeItem("authenticatedUser");
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem("authenticatedUser");
    if (user === null) return false;
    return true;
  }

  getLoggedInUser() {
    let user = sessionStorage.getItem("authenticatedUser");
    if (user === null) return "";
    return user;
  }

  createBasicAuthToken(username, password) {
    return "Basic " + window.btoa(username + ":" + password);
  }
  basicAuthentication(username, password) {
    return axios.get("/basic-auth", {
      headers: {
        authorization:this.createBasicAuthToken(username, password)
      }
    });
  }
}

export default new AuthenticationService();
