import * as loginPageActions from "../pages/LoginPage/actions";
import * as loginPageAPI from "../pages/LoginPage/api";

import * as cartPageActions from "../pages/CartPage/actions";
import * as cartPageAPI from "../pages/CartPage/api";

import * as signUpPageActions from "../pages/RegistrationPage/actions";
import * as signUpPageAPI from "../pages/RegistrationPage/api";

import * as productsPageActions from "../pages/ProductsPage/actions";
import * as productsPageAPI from "../pages/ProductsPage/api";

import * as productDetailsActions from "../pages/ProductDetailedPage/actions";
import * as productDetailsAPI from "../pages/ProductDetailedPage/api";

import * as updateCartActions from "../pages/CartPage/actions";
import * as updateCartAPI from "../pages/CartPage/api";

import * as addItemActions from "../pages/CartPage/actions";
import * as addItemAPI from "../pages/CartPage/api";

import * as deleteItemActions from "../pages/CartPage/actions";
import * as deleteItemAPI from "../pages/CartPage/api";

import * as createOrderAPI from "../pages/OrderPage/api";
import * as createOrderActions from "../pages/OrderPage/actions";

import * as getOrdersAPI from "../pages/OrdersPage/api";
import * as getOrdersActions from "../pages/OrdersPage/actions";

//result is request
const apiCallsMapping = (action) => {
  const mapping = {
    //objects for mapping: {key-action : fn}
    [loginPageActions.LOG_IN_REQUEST]: loginPageAPI.login,

    [signUpPageActions.SIGN_UP_REQUEST]: signUpPageAPI.signup,

    [productsPageActions.GET_PRODUCTS_REQUEST]: productsPageAPI.getProducts,

    [productDetailsActions.GET_PRODUCT_DETAILS_REQUEST]:
      productDetailsAPI.getProductDetail,

    [cartPageActions.GET_CART_REQUEST]: cartPageAPI.getCart,

    [addItemActions.ADD_ITEM_REQUEST]: addItemAPI.addCartItem,

    [updateCartActions.UPDATE_ITEM_REQUEST]: updateCartAPI.updateQuantity,

    [deleteItemActions.DELETE_ITEM_REQUEST]: deleteItemAPI.deleteCartItem,

    [createOrderActions.CREATE_ORDER_REQUEST]: createOrderAPI.createOrder,

    [getOrdersActions.GET_ORDERS_REQUEST]: getOrdersAPI.getOrders,
  };
  //returns fn corresponding with key
  return mapping[action.type];
};
export default apiCallsMapping;
