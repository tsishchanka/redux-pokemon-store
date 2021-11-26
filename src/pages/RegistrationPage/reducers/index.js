import * as actions from "../actions";
import { handleActions } from "redux-actions";

const defaultState = {
  isLoading: false,
  userInfo: {},
  isRegistered: false,
  error: null,
};

const regReducer = handleActions(
  {
    [actions.SIGN_UP_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
      error: null,
    }),

    [actions.SIGN_UP_SUCCESS]: (state, { payload }) => {
      const { userInfo } = payload.response;

      return {
        isLoading: false,
        userInfo,
        isRegistered: true,
        error: null,
      };
    },
    [actions.SIGN_UP_FAIL]: (state, { payload }) => ({
      isLoading: false,
      error: payload.response,
    }),
  },
  defaultState
);

export default regReducer;
