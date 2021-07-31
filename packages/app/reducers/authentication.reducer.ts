import { usersConstants } from "../constants";

let user =  typeof window !== "undefined" && JSON.parse(<string>localStorage.getItem("users"));
const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState,
  action: { type: any; users: any; }) {
  switch (action.type) {
    case usersConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        users: action.users,
      };
    case usersConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        users: action.users,
      };
    case usersConstants.LOGIN_FAILURE:
      return {};
    case usersConstants.LOGOUT:
      return {};
    default:
      return state;
  }
}
