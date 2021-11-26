import { handleActions } from "redux-actions";

import * as actions from "../actions";

const defaultState = {
  customerId: "",
  totalOrderPrice: 0,
  itemsOrderList: [],
  isOrderCreated: false,
  isLoading: false,
  error: null,
};

const orderReducer = handleActions(
  {
    [actions.CREATE_ORDER_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),

    [actions.CREATE_ORDER_SUCCESS]: () => {
      window.location.reload();
      return { ...defaultState };
    },

    [actions.CREATE_ORDER_FAIL]: (state, { payload }) => ({
      isLoading: false,
      error: payload.response,
    }),
  },
  defaultState
);
export default orderReducer;
