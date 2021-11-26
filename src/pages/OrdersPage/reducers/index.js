import { handleActions } from "redux-actions";

import * as actions from "../actions";

const defaultState = {
  customerId: "",
  totalPrice: 0,
  itemsList: [],
  _id: "",
  createdAt: "",
  isLoading: false,
};

const ordersReducer = handleActions(
  {
    [actions.GET_ORDERS_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),

    [actions.GET_ORDERS_SUCCESS]: (state, { payload }) => {
      return {
        ...state,
        isLoading: false,
        list: payload.response,
      };
    },

    [actions.GET_ORDERS_FAIL]: (state, { payload }) => ({
      isLoading: false,
      errors: payload.response,
    }),

    /*    [actions.CHANGE_ORDERS_PAGE]: (state, { payload }) => ({
          ...state,
          currentPage: payload,
        }),*/
  },
  defaultState
);
export default ordersReducer;
