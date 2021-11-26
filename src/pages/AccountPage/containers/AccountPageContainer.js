import React, { useEffect, useLayoutEffect } from "react";
import AccountPageLayout from "../components/AccountPageLayout";
import { useDispatch, useSelector } from "react-redux";

import { GET_ORDERS_REQUEST } from "../../OrdersPage/actions";
import { GET_CART_REQUEST } from "../../CartPage/actions";
import { ROUTES } from "../../../routes/routeNames";
import { useHistory } from "react-router-dom";

const AccountPageContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { list, isLoading } = useSelector((state) => state.orders);
  const { isAuth, info } = useSelector((state) => state.auth);
  const { quantity } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(GET_CART_REQUEST());
  }, [dispatch]);

  useEffect(() => {
    dispatch(GET_ORDERS_REQUEST());
  }, [dispatch]);

  useLayoutEffect(() => {
    if (!isAuth) {
      history.push(ROUTES.AUTHORIZATION_PAGE);
    }
  }, [isAuth]);

  return (
    <AccountPageLayout
      isLoading={isLoading}
      list={list}
      info={info}
      quantity={quantity}
    />
  );
};

export default AccountPageContainer;
