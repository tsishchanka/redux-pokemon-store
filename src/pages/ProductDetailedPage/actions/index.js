import { createAction } from "redux-actions";

export const GET_PRODUCT_DETAILS_REQUEST = createAction(
  "GET_PRODUCT_DETAILS_REQUEST"
);
export const GET_PRODUCT_DETAILS_SUCCESS = createAction(
  "GET_PRODUCT_DETAILS_SUCCESS"
);
export const GET_PRODUCT_DETAILS_FAIL = createAction(
  "GET_PRODUCT_DETAILS_FAIL"
);
