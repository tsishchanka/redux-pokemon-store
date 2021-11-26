import api from "../../../http";

export const login = (signData) => api.post("auth/signIn", signData);
