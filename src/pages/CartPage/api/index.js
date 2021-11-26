import api from "../../../http";

export const getCart = () => api.get("/cart");

export const updateQuantity = (quantityData) =>
  api.patch("/cart/item", quantityData);

export const addCartItem = (addedItem) => api.post("cart/item", addedItem);

export const deleteCartItem = (id) => api.delete(`/cart/item/${id}`, id);
