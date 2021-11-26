import { createAction } from "redux-actions";

export const GET_PRODUCTS_REQUEST = createAction("GET_PRODUCTS_REQUEST");
export const GET_PRODUCTS_SUCCESS = createAction("GET_PRODUCTS_SUCCESS");
export const GET_PRODUCTS_FAIL = createAction("GET_PRODUCTS_FAIL");

export const CHANGE_PAGE = createAction("CHANGE_PAGE");
