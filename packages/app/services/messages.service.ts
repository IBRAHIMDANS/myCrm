import { toLower } from "lodash";
import handleResponseAPi from "../utils/handleResponseApi";
import { Users } from "../dto";
import { LoginPayload } from "../dto/LoginPayload";
import { history } from "../utils/history";
import { authHeader } from "../utils/auth-header";

const { NEXT_PUBLIC_CRM_API } = process.env;
export const messagesService = {
  getAll,
};

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
