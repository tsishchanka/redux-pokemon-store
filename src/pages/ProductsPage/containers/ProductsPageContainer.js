import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import ProductsPageLayout from "../components/ProductsPageLayout";
import { CHANGE_PAGE, GET_PRODUCTS_REQUEST } from "../actions";
import { useCart } from "../../../hooks";
import { ADD_ITEM_REQUEST } from "../../CartPage/actions";
import { ROUTES } from "../../../routes/routeNames";

const ProductsPageContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { handleAddProductToCart, handleDeleteProductFromCart } = useCart();

  const { isAuth } = useSelector((state) => state.auth);

  const { list, isLoading, currentPage } = useSelector(
    (state) => state.productsPage
  );

  const { itemsList, quantity } = useSelector((state) => state.cart);

  const handleGoToDetails = useCallback((id) => {
    history.push(`/products/${id}`);
  }, []);

  const handlePageChange = useCallback(
    (page) => {
      dispatch(CHANGE_PAGE(page));
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(GET_PRODUCTS_REQUEST(currentPage));
  }, [currentPage]);

  useLayoutEffect(() => {
    if (!isAuth) {
      history.push(ROUTES.AUTHORIZATION_PAGE);
    }
  }, [isAuth]);

  return (
    <ProductsPageLayout
      itemsList={itemsList}
      list={list}
      quantity={quantity}
      isLoading={isLoading}
      handleGoToDetails={handleGoToDetails}
      handleAddProductToCart={handleAddProductToCart}
      handleDeleteProductFromCart={handleDeleteProductFromCart}
      handlePageChange={handlePageChange}
      currentPage={currentPage}
    />
  );
};
export default ProductsPageContainer;
