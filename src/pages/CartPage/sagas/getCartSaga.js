import { put, takeEvery, select } from "redux-saga/effects";
import { GET_CART_REQUEST } from "../actions";
import { LOG_IN_SUCCESS } from "../../LoginPage/actions";

export function* getCartWorker() {
  const isAuth = yield select((state) => state.auth);

  if (isAuth) {
    yield put(GET_CART_REQUEST());
  }
}

export function* getCartWatcher() {
  yield takeEvery(LOG_IN_SUCCESS, getCartWorker);
}
