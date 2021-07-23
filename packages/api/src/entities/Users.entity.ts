import { Column, Entity, JoinColumn, OneToMany } from "typeorm";

import { Exclude } from "class-transformer";
import { PasswordTransformer } from "../lib/password.transformer";
import { Length } from "class-validator";
import { TimestampEntities } from "../Generics/timestamp.entities";
import Messages from "./Messages.entity";

@Entity({
  name: "users",
})

export default class Users extends TimestampEntities {

  @Column({ length: 255, name: "first_name" })
  firstName: string;

  @Column({ length: 255, name: "last_name" })
  lastName: string;

  @Column({ length: 255 })
  email: string;

  @Column({ length: 255, nullable: true })
  phoneNumber?: string;

  @Exclude()
  @Length(4)
  @Column({
    name: "password",
    length: 255,
    transformer: new PasswordTransformer(),
  })
  password?: string;

  @Column({
    type: "boolean",
    default: true,
  })
  isActive: boolean;

  @OneToMany(() => Messages, messages => messages.user, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    cascade: true,
  })
  @JoinColumn()
  messages: Messages[];

  @OneToMany(() => Messages, messages => messages.receiverUser, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    cascade: true,
  })
  @JoinColumn()
  receiverUser?: Messages[];
}
