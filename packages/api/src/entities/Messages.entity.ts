import { Column, Entity, JoinTable, ManyToOne } from "typeorm";
import { TimestampEntities } from "../Generics/timestamp.entities";
import { Users } from "./index";

@Entity({
  name: "messages",
})

export default class Messages extends TimestampEntities {

  @Column({ length: 255, name: "text" })
  text: string;

  @Column({ type: "boolean", default: false })
  isRead: boolean;

  @ManyToOne(() => Users, user => user.messages, {
    eager: true,
  })
  @JoinTable()
  user: Users;

  @ManyToOne(() => Users, user => user.receiverUser, {
    eager: true,
  })
  @JoinTable()
  receiverUser: Users;
}
