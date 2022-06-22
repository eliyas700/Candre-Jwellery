import axios from "axios";
import { TokenService } from "./Storage.service";

const ApiService = {
  init(baseURL) {
    axios.defaults.baseURL = baseURL;
  },

  setHeader() {
    axios.defaults.withCredentials = true;
    axios.defaults.headers.common[
      "Authorization"
    ] = `Token ${TokenService.getToken()}`;
    console.log("headerset", TokenService.getToken());
  },

  removeHeader() {
    axios.defaults.headers.common = {};
  },

  get(resource, headers) {
    return axios.get(resource, headers);
  },

  post(resource, data, headers) {
    return axios.post(resource, data, headers);
  },

  put(resource, data, headers) {
    return axios.put(resource, data, headers);
  },

  delete(resource, data, headers) {
    return axios.delete(resource, data, headers);
  },
  patch(resource, data, headers) {
    return axios.patch(resource, data, headers);
  },

  customRequest(data) {
    return axios(data);
  },
};

export default ApiService;
