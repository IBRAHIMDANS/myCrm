import { usersConstants } from "../constants";
import { usersService } from "../services";
import { Login, Users } from "../dto";
import { history } from "../utils/history";
import { alertActions } from "./alert.actions";

export const usersActions = {
  login,
  register,
  logout,
  getAll,
  // getById,
  // update,
  // delete: _delete,
};

function login({ email, password }: Login) {
  return (dispatch: any) => {
    dispatch(request({ email }));

    usersService.login({ email, password })
      .then(
        (users: any) => {
          dispatch(success(users));
          history.push("/");
        },
        (error: any) => {
          dispatch(failure(error.toString()));
          dispatch(alertActions.error(error.toString()));
        },
      );
  };

  function request(users: any) {
    return { type: usersConstants.LOGIN_REQUEST, users };
  }

  function success(users: any) {
    return { type: usersConstants.LOGIN_SUCCESS, users };
  }

  function failure(error: any) {
    return { type: usersConstants.LOGIN_FAILURE, error };
  }
}

function register(users: Users) {
  const { email } = users;
  return (dispatch: any) => {
    dispatch(request({ email }));

    usersService.register(users)
      .then(
        (users: any) => {
          dispatch(success(users));
          history.push("/login");
        },
        (error: any) => {
          dispatch(failure(error.toString()));
          dispatch(alertActions.error(error.toString()));
        },
      );
  };

  function request(users: any) {
    return { type: usersConstants.REGISTER_REQUEST, users };
  }

  function success(users: any) {
    return { type: usersConstants.REGISTER_SUCCESS, users };
  }

  function failure(error: any) {
    return { type: usersConstants.REGISTER_FAILURE, error };
  }
}

// function update(activityDomain: any, therapeuticDomain: any, otherDomain: any,
//   singleOrMulti: any, regionalOrEurope: any) {
//   return dispatch => {
//     dispatch(request());
//
//     usersService.update({
//       activityDomain,
//       therapeuticDomain,
//       otherDomain,
//       singleOrMulti,
//       regionalOrEurope,
//     })
//       .then(
//         (user: any) => {
//           dispatch(success(user));
//         },
//         (error: any) => {
//           dispatch(failure(error.toString()));
//           dispatch(alertActions.error(error.toString()));
//         },
//       );
//   };
//
//   function request() {
//     return { type: usersConstants.UPDATE_REQUEST };
//   }
//
//   function success(user: any) {
//     return { type: usersConstants.UPDATE_SUCCESS, user };
//   }
//
//   function failure(error: any) {
//     return { type: usersConstants.UPDATE_FAILURE, error };
//   }
// }
//
function logout() {
  usersService.logout();
  return { type: usersConstants.LOGOUT };
}

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

//
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
