import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { Exclude } from "class-transformer";
import { PasswordTransformer } from "../lib/password.transformer";
import { Length } from "class-validator";
import { TimestampEntities } from "../Generics/timestamp.entities";
import Messages from "./Message.entity";

@Entity({
  name: "users",
})

export default class User extends TimestampEntities {

  @Column({ unique: true })
  @PrimaryGeneratedColumn()
  id: string;

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

  @OneToMany(() => Messages, messages => messages.user)
  messages: Messages[];

}
