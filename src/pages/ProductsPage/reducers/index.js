import { handleActions } from "redux-actions";

import * as actions from "../actions";

const defaultState = {
  list: [],
  isLoading: false,
  currentPage: 1,
  error: null,
};

const productsPageReducer = handleActions(
  {
    [actions.GET_PRODUCTS_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [actions.GET_PRODUCTS_SUCCESS]: (state, { payload }) => ({
      ...state,
      list: payload.response,
      isLoading: false,
    }),
    [actions.GET_PRODUCTS_FAIL]: (state, { payload }) => ({
      ...state,
      error: payload,
      isLoading: false,
    }),
    [actions.CHANGE_PAGE]: (state, { payload }) => ({
      ...state,
      currentPage: payload,
    }),
  },
  defaultState
);

export default productsPageReducer;
