import {
  Body,
  Controller,
  Get, Param, ParseUUIDPipe,
  Post,
  Request,
  UseGuards,
} from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";


import { AuthService } from "./auth.service";
import { UsersService } from "../users/users.service";
import { TokenModel } from "./dto/token.model";
import { LoginPayload, RegisterPayload } from "./payloads";
import { LocalAuthGuard } from "./guards/local-auth.guard";
import { JwtAuthGuard } from "./guards/jwt-auth.guard";

@Controller("auth")
@ApiTags("authentication")
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
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

  @Get("switchUser/:id")
  @UseGuards(JwtAuthGuard)
  @ApiResponse({ status: 201, description: "Successful Login" })
  @ApiResponse({ status: 400, description: "Bad Request" })
  @ApiResponse({ status: 401, description: "Unauthorized" })
  async switchUser(@Request() req,@Param("id", new ParseUUIDPipe()) id: string): Promise<TokenModel> {
    return await this.authService.generateToken(id)
  }


  @Post("register")
  @ApiResponse({ status: 201, description: "Successful Registration" })
  @ApiResponse({ status: 400, description: "Bad Request" })
  @ApiResponse({ status: 401, description: "Unauthorized" })
  async register(@Body() payload: RegisterPayload) {
    return await this.usersService.create(payload);
  }


}
