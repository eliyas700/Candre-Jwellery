import { signOut } from "../redux/authSlice";
import { store } from "../store";
import ApiService from "./api.service";

const TOKEN_KEY = "token";
const REFRESH_TOKEN_KEY = "refresh_token";
const EXPIRY_TIME = "expiry";
const RELATION_ID = "relation_id";
const DATA = "user_info";

const TokenService = {
  getToken() {
    return localStorage.getItem(TOKEN_KEY);
  },

  saveToken(accessToken) {
    localStorage.setItem(TOKEN_KEY, accessToken);
  },

  removeToken() {
    localStorage.removeItem(TOKEN_KEY);
  },

  getRefreshToken() {
    return localStorage.getItem(REFRESH_TOKEN_KEY);
  },

  saveRefreshToken(refreshToken) {
    localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
  },

  removeRefreshToken() {
    localStorage.removeItem(REFRESH_TOKEN_KEY);
  },

  getExpiryTime() {
    return localStorage.getItem(EXPIRY_TIME);
  },

  saveExpiryTime(expiry) {
    localStorage.setItem(EXPIRY_TIME, expiry);
  },

  removeExpiryTime() {
    localStorage.removeItem(EXPIRY_TIME);
  },

  getRelationManagerId() {
    return localStorage.getItem(RELATION_ID);
  },

  saveRelationManagerId(relationId) {
    localStorage.setItem(RELATION_ID, relationId);
  },

  removeRelationManagerId() {
    localStorage.removeItem(RELATION_ID);
  },

  saveData(data) {
    localStorage.setItem(DATA, JSON.stringify(data));
  },

  getData() {
    return JSON.parse(localStorage.getItem(DATA));
  },

  removeData() {
    return localStorage.removeItem(DATA);
  },

  logout() {
    localStorage.removeItem(EXPIRY_TIME);
    localStorage.removeItem(RELATION_ID);
    localStorage.removeItem(TOKEN_KEY);
    ApiService.removeHeader();
    store.dispatch(signOut());
  },
};

export { TokenService };
