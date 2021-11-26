import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import { createBlacklistFilter } from "redux-persist-transform-filter";
import storage from "redux-persist/lib/storage";

import authReducer from "../pages/LoginPage/reducers";
import productsPageReducer from "../pages/ProductsPage/reducers";
import productDetailsPageRequest from "../pages/ProductDetailedPage/reducers";
import regReducer from "../pages/RegistrationPage/reducers";
import cartReducer from "../pages/CartPage/reducers";
import orderReducer from "../pages/OrderPage/reducers";
import ordersReducer from "../pages/OrdersPage/reducers";

//save in localStorage all from auth except isLoading and errors
const authBlackListedFields = createBlacklistFilter("auth", [
  "isLoading",
  "errors",
]);

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"], // add new field with ,*
  transforms: [authBlackListedFields],
};

const rootReducer = combineReducers({
  auth: authReducer,
  signup: regReducer,
  cart: cartReducer,
  productsPage: productsPageReducer,
  productDetails: productDetailsPageRequest,
  order: orderReducer,
  orders: ordersReducer,
});

export default persistReducer(persistConfig, rootReducer);
