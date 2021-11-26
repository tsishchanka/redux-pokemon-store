import { call, put, takeEvery, delay } from "redux-saga/effects";
/*import { isEmpty } from "lodash";*/

import { ACTION_POSTFIXES } from "../../constants/actionPostfixes";
import apiCallsMapping from "../../http/apiCallsMapping";
import createActionWithPostfix from "../utils/actionPostfixCreator";

const { REQUEST_POSTFIX, SUCCESS_POSTFIX, FAIL_POSTFIX } = ACTION_POSTFIXES;

// WORKER
function* sendRequest(action) {
  try {
    //3.  Finding a fn to proceed (apiCallsMapping)
    //3.1 result is fn request
    const callRequest = apiCallsMapping(action);

    //3.2call fn-request with call-methode
    //3.3 data saved in response.data(axios)
    // action.payload was dispatched in action before request
    const response = yield call(callRequest, action.payload);

    //4 create new action with new Postfix
    const newActionToDispatch = createActionWithPostfix(
      action,
      {
        response: response.data,
        actionPayload: action.payload,
      },
      SUCCESS_POSTFIX
    );

    yield put(newActionToDispatch);
  } catch (error) {
    yield put(
      createActionWithPostfix(
        action,
        {
          response: error.response.data.message,
        },
        FAIL_POSTFIX
      )
    );
  }
}

//1.  returns true or false
const isApiCallAction = (action) => action.type.endsWith(REQUEST_POSTFIX);

//2.  if true on step 1 sendRequest (worker) begins to work
function* apiCallsSaga() {
  yield takeEvery(isApiCallAction, sendRequest);
}

export default apiCallsSaga;
