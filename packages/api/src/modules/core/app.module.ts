import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { auth, database, mail } from "../../config";
import { JwtModule } from "@nestjs/jwt";
import { AuthModule } from "../auth";
import { HealthModule } from "../health/health.module";
import { UsersModule } from "../users/users.module";
import { MessagesModule } from "../messages/messages.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [database, auth, mail],
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigService) => {
        const db = config.get("database");
        db.entities = ["dist/**/*.entity.js"];
        return db;
      }, inject: [ConfigService],
    }),
    {
      ...JwtModule.registerAsync({
        useFactory: async (configService: ConfigService) => {
          return {
            secret: configService.get("auth.secret"), signOptions: {
              ...(configService.get("auth.expiresIn") ? {
                    expiresIn: configService.get("auth.expiresIn")
                  }
                  : {
                    expiresIn: "1h"
                  }
              )
            }

          };
        },
        inject: [ConfigService]
      }), global: true
    },
    AuthModule,
    UsersModule,
    HealthModule,
    MessagesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
