import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_ITEM_REQUEST,
  UPDATE_ITEM_REQUEST,
  DELETE_ITEM_REQUEST,
} from "../pages/CartPage/actions";
import { CREATE_ORDER_REQUEST } from "../pages/OrderPage/actions";

const useCart = () => {
  const dispatch = useDispatch();
  const { itemsList, quantity } = useSelector((state) => state.cart);
  const { list } = useSelector((state) => state.productsPage);

  const handleAddProductToCart = useCallback(
    (product) => {
      const productToAdd = {
        ...product,
        quantity: 1,
      };

      dispatch(ADD_ITEM_REQUEST(productToAdd));
    },
    [dispatch]
  );
  const handleQuantityIncrement = useCallback(
    (product) => {
      const updatedProduct = {
        id: product.id,
        quantity: product.quantity + 1,
      };
      dispatch(UPDATE_ITEM_REQUEST(updatedProduct));
    },
    [dispatch]
  );

  const handleQuantityDecrement = useCallback(
    (product) => {
      if (product.quantity > 1) {
        const updatedProduct = {
          id: product.id,
          quantity: product.quantity - 1,
        };
        dispatch(UPDATE_ITEM_REQUEST(updatedProduct));
      }
    },
    [dispatch]
  );

  const handleDeleteProductFromCart = useCallback(
    (product) => {
      dispatch(DELETE_ITEM_REQUEST(product));
    },
    [dispatch]
  );

  return {
    list,

    itemsList,
    handleQuantityIncrement,
    handleQuantityDecrement,
    handleAddProductToCart,
    handleDeleteProductFromCart,
  };
};
export default useCart;
