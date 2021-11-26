import { handleActions } from "redux-actions";

import * as actions from "../actions";
import { LOCAL_STORAGE_KEYS } from "../../../constants/localStorageKeys";

const defaultState = {
  isLoading: false,
  info: {},
  isAuth: false,
  errors: null,
};

const authReducer = handleActions(
  {
    [actions.LOG_IN_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),

    [actions.LOG_IN_SUCCESS]: (state, { payload }) => {
      const { accessToken, ...userInfo } = payload.response;

      //save token in local storage
      localStorage.setItem(LOCAL_STORAGE_KEYS.TOKEN, accessToken);

      return {
        ...state,
        isLoading: false,
        info: userInfo,
        isAuth: true,
        errors: null,
      };
    },
    [actions.LOG_IN_FAIL]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      errors: payload.response,
    }),
  },
  defaultState
);

export default authReducer;
