import { messagesConstants } from "../constants";
import { messagesService } from "../services";
import { Messages } from "../dto";

export const messagesActions = {
  getAll,
  // getById,
  post
};

function getAll() {
  return (dispatch: any) => {
    dispatch(request());

    messagesService.getAll()
      .then(
        (users: any) => dispatch(success(users)),
        (error: any) => dispatch(failure(error.toString())),
      );
  };

  function request() {
    return { type: messagesConstants.GET_ALL_REQUEST };
  }

  function success(messages: any) {
    return { type: messagesConstants.GET_ALL_SUCCESS, messages };
  }

  function failure(error: any) {
    return { type: messagesConstants.GET_ALL_FAILURE, error };
  }
}
function post(messages: Messages) {
  return (dispatch: any) => {
    dispatch(request());

    messagesService.post(messages)
      .then(
        (users: any) => dispatch(success(users)),
        (error: any) => dispatch(failure(error.toString())),
      );
  };

  function request() {
    return { type: messagesConstants.GET_ALL_REQUEST };
  }

  function success(messages: any) {
    return { type: messagesConstants.GET_ALL_SUCCESS, messages };
  }

  function failure(error: any) {
    return { type: messagesConstants.GET_ALL_FAILURE, error };
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
