import { combineReducers } from "redux";
import { users } from "./users.reducer";
import { authentication } from "./authentication.reducer";
import { messagesReceive } from "./messages_receive.reducer";
import { messagesSender } from "./messages_sender.reducer";
import { message } from "./message.reducer";
import { alert } from "./alert.reducer";

const rootReducer = combineReducers({
  users,
  authentication,
  alert,
  messagesReceive,
  messagesSender,
  message,
});
export default rootReducer;
