import { messagesConstants } from "../constants";

export function messagesReceive(state = {},
  action: { type: any; messages: any; error: any; }) {
  switch (action.type) {
    case messagesConstants.GET_ALL_RECEIVE_REQUEST:
      return {
        loading: true,
      };
    case messagesConstants.GET_ALL_RECEIVE_SUCCESS:
      return {
        messages: action.messages,
      };
    case messagesConstants.GET_ALL_RECEIVE_FAILURE:
      return {
        error: action.error,
      };
    default:
      return state;
  }
}
