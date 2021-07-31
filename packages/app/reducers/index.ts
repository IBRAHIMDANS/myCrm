import { combineReducers } from "redux";
import { users } from "./users.reducer";
import { authentication } from "./authentication.reducer";
import { messages } from "./messages.reducer";
import { alert } from "./alert.reducer";

type rootReducer = {
  user: any
  authentication: any
  alert: any
  messages:any
}
const rootReducer: any = combineReducers({
  users,
  authentication,
  alert,
  messages
});
export default rootReducer;
