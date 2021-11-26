import api from "../../../http";

export const signup = (signData) => api.post("auth/signup", signData);
