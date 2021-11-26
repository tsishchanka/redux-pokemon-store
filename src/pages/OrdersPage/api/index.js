import api from "../../../http";

export const getOrders = () => api.get(`/order`);
