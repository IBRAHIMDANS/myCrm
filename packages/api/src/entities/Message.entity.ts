import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

import { Exclude } from "class-transformer";
import { PasswordTransformer } from "../lib/password.transformer";
import { Length } from "class-validator";
import { TimestampEntities } from "../Generics/timestamp.entities";
import { User } from "./index";

@Entity({
  name: "messages",
})

export default class Messages extends TimestampEntities {

  @Column({ unique: true })
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ length: 255, name: "first_name" })
  userId: string;

  @Column({ length: 255, name: "text" })
  text: string;

  @ManyToOne(() => User, user => user.messages)
  user: User;
}
