import React, { useCallback, useEffect, useLayoutEffect } from "react";
import OrderPageLayout from "../components/OrderPageLayout";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { GET_CART_REQUEST } from "../../CartPage/actions";
import { ROUTES } from "../../../routes/routeNames";
import { SIGN_UP_REQUEST } from "../../RegistrationPage/actions";
import { CREATE_ORDER_REQUEST } from "../actions";

const OrderPageContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { isOrderCreated, itemsOrderList, totalOrderPrice } = useSelector(
    (state) => state.order
  );

  const { totalPrice, quantity, itemsList, customerId, isLoading } =
    useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(GET_CART_REQUEST());
  }, [dispatch]);

  const handleGoToDetails = useCallback(() => {
    history.push(`/products`);
  }, []);

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

  return (
    <OrderPageLayout
      totalOrderPrice={totalOrderPrice}
      itemsOrderList={itemsOrderList}
      totalPrice={totalPrice}
      itemsList={itemsList}
      isLoading={isLoading}
      handleGoToDetails={handleGoToDetails}
      handleSubmit={handleSubmit}
      isOrderCreated={isOrderCreated}
    />
  );
};

export default OrderPageContainer;
