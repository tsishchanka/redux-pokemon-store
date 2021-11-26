import { handleActions } from "redux-actions";

import * as actions from "../actions";

const defaultState = {
  info: {},
  isLoading: false,
  error: null,
};

const productDetailsPageRequest = handleActions(
  {
    [actions.GET_PRODUCT_DETAILS_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [actions.GET_PRODUCT_DETAILS_SUCCESS]: (state, { payload }) => ({
      ...state,
      info: payload.response,
      isLoading: false,
    }),
    [actions.GET_PRODUCT_DETAILS_FAIL]: (state, { payload }) => ({
      ...state,
      error: payload,
      isLoading: false,
    }),
  },
  defaultState
);

export default productDetailsPageRequest;
