import { ACTION_POSTFIXES } from "../../constants/actionPostfixes";

const { REQUEST_POSTFIX } = ACTION_POSTFIXES;

//action creator
const actionPostfixCreator = (action, payload, postfix) => {
  return {
    type:
      action.type.slice(0, action.type.length - REQUEST_POSTFIX.length) +
      postfix,
    payload: {
      //axios data from server
      response: payload.response,
      //initial data-payload
      actionPayload: payload.actionPayload,
    },
  };
};

export default actionPostfixCreator;
