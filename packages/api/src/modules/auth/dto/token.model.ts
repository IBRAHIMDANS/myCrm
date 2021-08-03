export class TokenModel {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  accessToken: string;
  phoneNumber?:string
  expiresIn: string;
  isAdmin?:boolean;
}
