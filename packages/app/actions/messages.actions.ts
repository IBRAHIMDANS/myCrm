import { usersConstants } from "../constants";
import { usersService } from "../services";

export const messagesActions = {
  getAll,
  // getById,
};

function getAll() {
  return (dispatch: any) => {
    dispatch(request());

    usersService.getAll()
      .then(
        (users: any) => dispatch(success(users)),
        (error: any) => dispatch(failure(error.toString())),
      );
  };

  function request() {
    return { type: usersConstants.GET_ALL_REQUEST };
  }

  function success(users: any) {
    return { type: usersConstants.GET_ALL_SUCCESS, users };
  }

  function failure(error: any) {
    return { type: usersConstants.GET_ALL_FAILURE, error };
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
//     return { type: usersConstants.GET_BY_ID_REQUEST, id };
//   }
//
//   function success(user: any) {
//     return { type: usersConstants.GET_BY_ID_SUCCESS, user };
//   }
//
//   function failure(id: any, error: any) {
//     return { type: usersConstants.GET_BY_ID_FAILURE, id, error };
//   }
// }
