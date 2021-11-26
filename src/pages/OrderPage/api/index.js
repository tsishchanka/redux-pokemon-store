import api from "../../../http";

/*export const getOrders = () => api.get(`/order`);*/

export const createOrder = (orderInfo) => api.post(`/order`, orderInfo);
