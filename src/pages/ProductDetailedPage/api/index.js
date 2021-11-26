import api from "../../../http";

export const getProductDetail = (id) => api.get(`products/${id}`);
