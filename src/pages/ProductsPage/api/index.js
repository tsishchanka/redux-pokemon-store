import api from "../../../http";

export const getProducts = (page) => api.get(`products?page=${page}`);
