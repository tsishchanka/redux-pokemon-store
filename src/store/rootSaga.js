import "regenerator-runtime/runtime";
import { all } from "redux-saga/effects";

import apiCallsSaga from "../helpers/request/watchRequest";
import {
  getCartWorker,
  getCartWatcher,
} from "../pages/CartPage/sagas/getCartSaga";

function* rootSaga() {
  yield all([apiCallsSaga(), getCartWorker(), getCartWatcher()]);
}

export default rootSaga;
