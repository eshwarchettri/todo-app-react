import axios from "./axios-config";
import AuthenticationService from "../components/todo/AuthenticationService.js";

class AxiosInterceptor {
  setUpAxiosInterceptor(basicAuthHeader) {
    axios.interceptors.request.use((config) => {
      if (AuthenticationService.isUserLoggedIn()) {
        config.headers.authorization = basicAuthHeader;
      }
      return config;
    });
  }
}

export default new AxiosInterceptor();
