import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UsersService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";
import { Users } from "../../entities";
import { ConfigService } from "@nestjs/config";
import { TokenModel } from "./dto/token.model";

@Injectable()
export class AuthService {

  constructor(
    private readonly usersService: UsersService,
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
  ) {
  }


  async createToken(user: Users): Promise<TokenModel> {
    return {
      expiresIn: this.configService.get("auth.expiresIn"),
      accessToken: this.jwtService.sign({ id: user.id }),
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      id: user.id,
    };
  }

  async validateUser(email: string, password: string): Promise<Users> {
    const user = await this.usersService.getByEmailAndPass(email, password);

    if (!user) {
      throw new UnauthorizedException("Wrong login combination! user are is not active or exist");
    }
    return user;
  }

}
