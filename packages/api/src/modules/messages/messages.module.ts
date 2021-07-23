import { Module } from "@nestjs/common";
import { MessagesService } from "./messages.service";
import { MessagesController } from "./messages.controller";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Messages, Users } from "../../entities";
import { PassportModule } from "@nestjs/passport";

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature([Users, Messages]),
    PassportModule.register({ defaultStrategy: "jwt" }),
  ],
  providers: [MessagesService],
  controllers: [MessagesController],
})
export class MessagesModule {
}
