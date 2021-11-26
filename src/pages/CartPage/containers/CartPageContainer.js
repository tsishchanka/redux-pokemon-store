import React, { useCallback, useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { GET_CART_REQUEST } from "../actions";
import CartPageLayout from "../components/CartPageLayout";
import { ROUTES } from "../../../routes/routeNames";
import useCart from "../../../hooks/useCart";
import { LOG_IN_REQUEST } from "../../LoginPage/actions";
import { CREATE_ORDER_REQUEST } from "../../OrderPage/actions";

const CartPageContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { totalPrice, quantity, itemsList, isLoading, customerId } =
    useSelector((state) => state.cart);
  const { isAuth, error } = useSelector((state) => state.auth);

  const {
    handleAddProductToCart,
    handleQuantityIncrement,
    handleQuantityDecrement,
    handleDeleteProductFromCart,
  } = useCart();

  useEffect(() => {
    dispatch(GET_CART_REQUEST());
  }, [dispatch]);

  const handleGoToDetails = useCallback((id) => {
    history.push(`/products/${id}`);
  }, []);

  const handleGoToPage = useCallback(() => {
    history.push(ROUTES.ORDER_PAGE);
  }, [history]);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      const newOrder = {
        customerId,
        totalPrice,
        itemsList,
      };
      if (totalPrice > 0) {
        dispatch(CREATE_ORDER_REQUEST(newOrder));
      }
    },
    [dispatch, itemsList, totalPrice, customerId]
  );

  useLayoutEffect(() => {
    if (!isAuth) {
      history.push(ROUTES.AUTHORIZATION_PAGE);
    }
  }, [isAuth]);

  return (
    <CartPageLayout
      handleSubmit={handleSubmit}
      quantity={quantity}
      totalPrice={totalPrice}
      itemsList={itemsList}
      isLoading={isLoading}
      handleAddProductToCart={handleAddProductToCart}
      handleGoToDetails={handleGoToDetails}
      handleQuantityDecrement={handleQuantityDecrement}
      handleQuantityIncrement={handleQuantityIncrement}
      handleDeleteProductFromCart={handleDeleteProductFromCart}
      handleGoToPage={handleGoToPage}
    />
  );
};

export default CartPageContainer;
