import { handleActions } from "redux-actions";

import * as actions from "../actions";

const defaultState = {
  totalPrice: 0,
  quantity: 0,
  itemsList: [],
  isLoading: false,

  error: null,
};
const cartReducer = handleActions(
  {
    [actions.GET_CART_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),

    [actions.GET_CART_SUCCESS]: (state, { payload }) => {
      const { totalPrice, quantity, itemsList, customerId } = payload.response;

      return {
        ...state,
        isLoading: false,
        totalPrice,
        quantity,
        itemsList,
        customerId,

        // currentPage: 1,
      };
    },
    [actions.GET_CART_FAIL]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      error: payload.response,
    }),
    // ADD ITEM

    [actions.ADD_ITEM_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),

    [actions.ADD_ITEM_SUCCESS]: (state, { payload }) => {
      const { itemsList, quantity, totalPrice } = payload.response;

      return {
        ...state,
        isLoading: false,
        itemsList,
        quantity,
        totalPrice,
      };
    },

    [actions.ADD_ITEM_FAIL]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      error: payload.response,
    }),

    //DELETE FROM CART

    [actions.DELETE_ITEM_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),

    [actions.DELETE_ITEM_SUCCESS]: (state, { payload }) => {
      const { cartState, removedItemId } = payload.response;
      const copyItemsList = [...state.itemsList];
      const findProductIndex = copyItemsList.findIndex(
        (item) => item.id === removedItemId
      );
      copyItemsList.splice(findProductIndex, 1);

      return {
        ...state,
        isLoading: false,
        totalPrice: cartState.totalPrice,
        itemsList: copyItemsList,
        quantity: cartState.quantity,
      };
    },
    [actions.DELETE_ITEM_FAIL]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      error: payload.response,
    }),

    //UPDATE QUANTITY AND TOTAL PRICE
    [actions.UPDATE_ITEM_REQUEST]: (state, { payload }) => ({
      ...state,
      itemId: payload.id,
    }),

    [actions.UPDATE_ITEM_SUCCESS]: (state, { payload }) => {
      const itemsListToUpdate = [...state.itemsList];
      const { cartState, updatedItem } = payload.response;

      const itemToUpdate = itemsListToUpdate.findIndex(
        (item) => item.id === updatedItem.id
      );
      itemsListToUpdate.splice(itemToUpdate, 1, updatedItem);

      return {
        ...state,
        isLoading: false,

        itemsList: itemsListToUpdate,
        quantity: cartState.quantity,
        totalPrice: cartState.totalPrice,
      };
    },

    [actions.UPDATE_ITEM_FAIL]: (state, { payload }) => ({
      ...state,
      isLoading: false,

      error: payload.response,
    }),

    /* [actions.LOG_OUT]: () => defaultState,*/
  },

  defaultState
);
export default cartReducer;
