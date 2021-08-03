import { messagesConstants } from "../constants";
import { messagesService } from "../services";
import { Messages } from "../dto";
import { alertActions } from "./alert.actions";

export const messagesActions = {
  getAllSender,
  getAllReceive,
  // getById,
  post,
  update
};

function getAllSender() {
  return (dispatch: any) => {
    dispatch(request());

    messagesService.getAllSender()
      .then(
        (messages: any) => dispatch(success(messages)),
        (error: any) => {
          dispatch(failure(error.toString()));
          dispatch(alertActions.error(error.toString()));
        },
      );
  };

  function request() {
    return { type: messagesConstants.GET_ALL_SENDER_REQUEST };
  }

  function success(messages: any) {
    return { type: messagesConstants.GET_ALL_SENDER_SUCCESS, messages };
  }

  function failure(error: any) {
    return { type: messagesConstants.GET_ALL_SENDER_FAILURE, error };
  }
}
function getAllReceive() {
  return (dispatch: any) => {
    dispatch(request());

    messagesService.getAllReceive()
      .then(
        (messages: any) => dispatch(success(messages)),
        (error: any) => {
          dispatch(failure(error.toString()));
          dispatch(alertActions.error(error.toString()));
        },
      );
  };

  function request() {
    return { type: messagesConstants.GET_ALL_RECEIVE_REQUEST };
  }

  function success(messages: any) {
    return { type: messagesConstants.GET_ALL_RECEIVE_SUCCESS, messages };
  }

  function failure(error: any) {
    return { type: messagesConstants.GET_ALL_RECEIVE_FAILURE, error };
  }
}

function post(message: Partial<Messages>) {
  return (dispatch: any) => {
    dispatch(request());

    messagesService.post(message)
      .then(
        (message: any) => dispatch(success(message)),
        (error: any) => dispatch(failure(error.toString())),
      );
  };

  function request() {
    return { type: messagesConstants.POST_REQUEST };
  }

  function success(message: Messages) {
    return { type: messagesConstants.POST_SUCCESS, message };
  }

  function failure(error: any) {
    return { type: messagesConstants.POST_FAILURE, error };
  }
}

function update(message: Partial<Messages>) {
  return (dispatch: any) => {
    dispatch(request());

    messagesService.update(message)
      .then(
        (message: any) => dispatch(success(message)),
        (error: any) => dispatch(failure(error.toString())),
      );
  };

  function request() {
    return { type: messagesConstants.UPDATE_REQUEST };
  }

  function success(message: Messages) {
    return { type: messagesConstants.UPDATE_SUCCESS, message };
  }

  function failure(error: any) {
    return { type: messagesConstants.UPDATE_FAILURE, error };
  }
}


// function getById(id: any) {
//   return ((dispatch: any) => {
//     dispatch(request(id));
//     usersService.getById(id)
//       .then(
//         (user: any) => dispatch(success(user)),
//         (error: { toString: () => any; }) => dispatch(failure(id, error.toString())),
//       );
//   };
//
//   function request(id: any) {
//     return { type: messagesConstants.GET_BY_ID_REQUEST, id };
//   }
//
//   function success(user: any) {
//     return { type: messagesConstants.GET_BY_ID_SUCCESS, user };
//   }
//
//   function failure(id: any, error: any) {
//     return { type: messagesConstants.GET_BY_ID_FAILURE, id, error };
//   }
// }
