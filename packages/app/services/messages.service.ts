import handleResponseAPi from "../utils/handleResponseApi";
import { authHeader } from "../utils/auth-header";
import { Messages } from "../dto";

const { NEXT_PUBLIC_CRM_API } = process.env;
export const messagesService = {
  getAllSender,
  getAllReceive,
  getById,
  post,
  update,
  deleteMessage
};

function getAllSender() {
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
function getAllReceive() {
  const requestOptions: any = {
    method: "GET",
    headers: authHeader(),
  };

  return fetch(`${NEXT_PUBLIC_CRM_API}/messages/receive`, requestOptions)
    .then(handleResponseAPi)
    .then(messages => {
      return messages;
    });
}

function getById(id:string) {
  const requestOptions: any = {
    method: "GET",
    headers: authHeader(),
  };

  return fetch(`${NEXT_PUBLIC_CRM_API}/messages/${id}`, requestOptions)
    .then(handleResponseAPi)
    .then(message => {
      return message;
    });
}
function deleteMessage(id:string) {
  const requestOptions: any = {
    method: "DELETE",
    headers: authHeader(),
  };

  return fetch(`${NEXT_PUBLIC_CRM_API}/messages/${id}`, requestOptions)
    .then(handleResponseAPi)
    .then(message => {
      return message;
    });
}

function post(message: Partial<Messages| any>) {
  const requestOptions: any = {
    method: "POST",
    headers: authHeader(),
    body: new URLSearchParams(message),
  };

  return fetch(`${NEXT_PUBLIC_CRM_API}/messages`, requestOptions)
    .then(handleResponseAPi)
    .then(message => message);
}

function update(message: Partial<Messages> | any) {
  console.log(message)
  const requestOptions: any = {
    method: "PATCH",
    headers: authHeader(),
    body: new URLSearchParams(message),
  };

  return fetch(`${NEXT_PUBLIC_CRM_API}/messages/${message.id}`, requestOptions)
    .then(handleResponseAPi)
    .then(message => message);
}
