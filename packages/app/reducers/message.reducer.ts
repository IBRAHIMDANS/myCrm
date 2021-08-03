import { messagesConstants } from "../constants";

export function message(state = {},
  action: { type: any; message: any; error: any; }) {
  switch (action.type) {
    case messagesConstants.GET_BY_ID_REQUEST:
      return {
        loading: true,
      };
    case messagesConstants.GET_BY_ID_SUCCESS:
      return {
        message: action.message,
      };
    case messagesConstants.GET_BY_ID_FAILURE:
      return {
        error: action.error,
      };
    case messagesConstants.UPDATE_REQUEST:
      return {
        loading: true,
      };
    case messagesConstants.UPDATE_SUCCESS:
      return {
        message: action.message,
      };
    case messagesConstants.UPDATE_FAILURE:
      return {
        error: action.error,
      };
    case messagesConstants.POST_REQUEST:
      return {
        loading: true,
      };
    case messagesConstants.POST_SUCCESS:
      return {
        message: action.message,
      };
    case messagesConstants.POST_FAILURE:
      return {
        error: action.error,
      };
    default:
      return state;
  }
}
