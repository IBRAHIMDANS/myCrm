import { Body, Controller, Post, Request, UseGuards } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";


import { AuthService } from "./auth.service";
import { UsersService } from "../users/users.service";
import { TokenModel } from "./dto/token.model";
import { LoginPayload, RegisterPayload } from "./payloads";
import { LocalAuthGuard } from "./guards/local-auth.guard";

@Controller("auth")
@ApiTags("authentication")
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UsersService,
  ) {
  }

  @Post("login")
  @UseGuards(LocalAuthGuard)
  @ApiResponse({ status: 201, description: "Successful Login" })
  @ApiResponse({ status: 400, description: "Bad Request" })
  @ApiResponse({ status: 401, description: "Unauthorized" })
  async login(@Request() req, @Body() body: LoginPayload): Promise<TokenModel> {
    return await this.authService.createToken(req.user);
  }


  @Post("register")
  @ApiResponse({ status: 201, description: "Successful Registration" })
  @ApiResponse({ status: 400, description: "Bad Request" })
  @ApiResponse({ status: 401, description: "Unauthorized" })
  async register(@Body() payload: RegisterPayload) {
    return await this.userService.create(payload);
  }


}
