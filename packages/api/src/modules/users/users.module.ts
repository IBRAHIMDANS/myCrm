import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Messages, Users } from "../../entities";
import { ConfigModule } from "@nestjs/config";
import { UsersController } from "./users.controller";
import { PassportModule } from "@nestjs/passport";

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature([Users, Messages]),
    PassportModule.register({ defaultStrategy: "jwt" }),
  ],
  providers: [UsersService],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {
}
