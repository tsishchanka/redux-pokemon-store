import axios from "axios";
import { LOCAL_STORAGE_KEYS } from "../constants/localStorageKeys";

const baseURL = "https://demo-api.it-shatle.by";

const config = {
  baseURL,
};

const api = axios.create(config);

api.interceptors.request.use((config) => {
  //before request we try to find token in local storage
  const token = localStorage.getItem(LOCAL_STORAGE_KEYS.TOKEN);

  config.headers.Authorization = `Bearer ${token}`;

  return config;
});

export default api;
