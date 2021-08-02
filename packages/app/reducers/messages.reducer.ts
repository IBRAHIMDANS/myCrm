import { messagesConstants } from "../constants";

export function messages(state = {},
  action: { type: any; messages: any; error: any; }) {
  switch (action.type) {
    case messagesConstants.GET_ALL_REQUEST:
      return {
        loading: true,
      };
    case messagesConstants.GET_ALL_SUCCESS:
      return {
        messages: action.messages,
      };
    case messagesConstants.GET_ALL_FAILURE:
      return {
        error: action.error,
      };
    case messagesConstants.GET_BY_ID_REQUEST:
      return {
        loading: true,
      };
    case messagesConstants.GET_BY_ID_SUCCESS:
      return {
        messages: action.messages,
      };
    case messagesConstants.GET_BY_ID_FAILURE:
      return {
        error: action.error,
      };
    case messagesConstants.POST_REQUEST:
      return {
        loading: true,
      };
    case messagesConstants.POST_SUCCESS:
      return {
        messages: action.messages,
      };
    case messagesConstants.POST_FAILURE:
      return {
        error: action.error,
      };
    default:
      return state;
  }
}
