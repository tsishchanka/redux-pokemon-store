import { createAction } from "redux-actions";

export const LOG_IN_REQUEST = createAction("LOG_IN_REQUEST");
export const LOG_IN_SUCCESS = createAction("LOG_IN_SUCCESS");
export const LOG_IN_FAIL = createAction("LOG_IN_FAIL");

export const LOG_OUT = createAction("LOG_OUT");
