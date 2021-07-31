import { usersConstants } from '../constants';

export function users(state = {}, action: { type: any; users: any; error: any;}) {
  switch (action.type) {
    case usersConstants.GET_ALL_REQUEST:
      return {
        loading: true
      };
    case usersConstants.GET_ALL_SUCCESS:
      return {
        items: action.users
      };
    case usersConstants.GET_ALL_FAILURE:
      return {
        error: action.error
      };
    case usersConstants.GET_BY_ID_REQUEST:
      return {
        loading: true
      };
    case usersConstants.GET_BY_ID_SUCCESS:
      return {
        users: action.users
      };
    case usersConstants.GET_BY_ID_FAILURE:
      return {
        error: action.error
      };
    case usersConstants.UPDATE_REQUEST:
      return {
        loading: true,
      };
    case usersConstants.UPDATE_SUCCESS:
      return {
        users: action.users,
      };
    case usersConstants.UPDATE_FAILURE:
      return {
        error: action.error,
      };
    case usersConstants.REGISTER_REQUEST:
      return {
        loggingIn: true,
        users: action.users,
      };
    case usersConstants.REGISTER_SUCCESS:
      return {
        loggedIn: true,
        users: action.users,
      };
    case usersConstants.USERS_CLEAN:
      return {};
    case usersConstants.REGISTER_FAILURE:
      return {};
    default:
      return state;
  }
}
