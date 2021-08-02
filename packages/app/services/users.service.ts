import { toLower } from "lodash";
import handleResponseAPi from "../utils/handleResponseApi";
import { Login, Users } from "../dto";
import { history } from "../utils/history";
import { authHeader } from "../utils/auth-header";

const { NEXT_PUBLIC_CRM_API } = process.env;
export const usersService = {
  login,
  logout,
  register,
  update,
  getAll,
};

function login({ email, password }: Login) {
  const requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({ email: toLower(email), password }),
  };

  return fetch(`${NEXT_PUBLIC_CRM_API}/auth/login`, requestOptions)
    .then(handleResponseAPi)
    .then(users => {
      localStorage.setItem("users", JSON.stringify(users));
      return users;
    });
}


function register(
  {
    email,
    firstName,
    lastName,
    password,
    phoneNumber,
  }: Partial<Users>) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      email: toLower(email),
      firstName,
      lastName,
      password,
      phoneNumber,
    }),
  };

  return fetch(`${NEXT_PUBLIC_CRM_API}/auth/register`, requestOptions)
    .then(handleResponseAPi)
    .then(users => {
      return users;
    });
}

async function update(
  {
    id,
    firstName,
    lastName,
    email,
  }: Users) {
  const requestOptions: any = {
    method: "PATCH",
    headers: authHeader(),
    body: JSON.stringify({
      email: toLower(email),
      firstName: firstName,
      lastName: lastName,
    }),
  };

  return fetch(`${NEXT_PUBLIC_CRM_API}/users/${id}`, requestOptions)
    .then(handleResponseAPi)
    .then(user => {
      return user;
    });
}

async function updatePassword({ password, confirmPassword }: Users) {
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({
      password,
      passwordConfirm: confirmPassword,
    }),
  };

  return fetch(`${NEXT_PUBLIC_CRM_API}/users/resetPassword`, requestOptions)
    .then(handleResponseAPi)
    .then(user => {
      return user;
    });
}

function logout() {
  localStorage.removeItem("users");
  history.push("/login");
}

function getAll() {
  const requestOptions: any = {
    method: "GET",
    headers: authHeader(),
  };

  return fetch(`${NEXT_PUBLIC_CRM_API}/users/all`, requestOptions)
    .then(handleResponseAPi)
    .then(users => {
      return users;
    });
}
