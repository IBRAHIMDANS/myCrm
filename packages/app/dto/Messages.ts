import { Users } from "./index";

type Messages = {
  id?: string
  content: string
  isRead: boolean
  isMessage: boolean
  receiverId?: string
  receiverUser?: Users
  createdAt?: Date
  UpdatedAt?: Date
  user?: Users
}
export default Messages;
