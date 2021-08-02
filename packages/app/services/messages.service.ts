import handleResponseAPi from "../utils/handleResponseApi";
import { authHeader } from "../utils/auth-header";
import { Messages } from "../dto";

const { NEXT_PUBLIC_CRM_API } = process.env;
export const messagesService = {
  getAll,
  post,
};

function getAll() {
  const requestOptions: any = {
    method: "GET",
    headers: authHeader(),
  };

  return fetch(`${NEXT_PUBLIC_CRM_API}/messages`, requestOptions)
    .then(handleResponseAPi)
    .then(messages => {
      return messages;
    });
}

function post(messages:Messages) {
  const requestOptions: any = {
    method: "POST",
    headers: authHeader(),
    body:JSON.stringify(messages)
  };

  return fetch(`${NEXT_PUBLIC_CRM_API}/messages`, requestOptions)
    .then(handleResponseAPi)
    .then(users => {
      return users;
    });
}
