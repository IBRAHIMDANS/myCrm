import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Request,
  UseGuards,
} from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { MessagesService } from "./messages.service";
import { MessagePayload } from "./payload/MessagePayload";
import { JwtAuthGuard } from "../auth";
import { Messages, Users } from "../../entities";
import { UsersDecorator } from "../../decorators";
import { DeleteResult, UpdateResult } from "typeorm";

@Controller("messages")
@ApiTags("messages")
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {
  }

  @Get("receive")
  @UseGuards(JwtAuthGuard)
  @ApiResponse({ status: 201, description: "Successful Login" })
  @ApiResponse({ status: 400, description: "Bad Request" })
  @ApiResponse({ status: 401, description: "Unauthorized" })
  async getReceiveMessage(@UsersDecorator() user: Partial<Users>): Promise<Messages[]> {
    return await this.messagesService.getReceiveMessage(user);
  }
  @Get("send")
  @UseGuards(JwtAuthGuard)
  @ApiResponse({ status: 201, description: "Successful Login" })
  @ApiResponse({ status: 400, description: "Bad Request" })
  @ApiResponse({ status: 401, description: "Unauthorized" })
  async getSendMessage(@UsersDecorator() user: Partial<Users>): Promise<Messages[]> {
    return await this.messagesService.getMessages(user);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiResponse({ status: 201, description: "Successful Login" })
  @ApiResponse({ status: 400, description: "Bad Request" })
  @ApiResponse({ status: 401, description: "Unauthorized" })
  async getUserMessages(@UsersDecorator() user: Partial<Users>): Promise<Messages[]> {
    return await this.messagesService.getMessages(user);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiResponse({ status: 201, description: "Successful Login" })
  @ApiResponse({ status: 400, description: "Bad Request" })
  @ApiResponse({ status: 401, description: "Unauthorized" })
  async postMessage(@Request() req,
    @Body() body: MessagePayload): Promise<Messages> {
    return await this.messagesService.postMessage(req.user, body);
  }

  @Get("/:id")
  @UseGuards(JwtAuthGuard)
  @ApiResponse({ status: 201, description: "Successful Login" })
  @ApiResponse({ status: 400, description: "Bad Request" })
  @ApiResponse({ status: 401, description: "Unauthorized" })
  async getMessage(@Param("id", new ParseUUIDPipe()) id: string): Promise<Messages> {
    return await this.messagesService.getMessage(id);
  }

  @Patch(":id")
  @UseGuards(JwtAuthGuard)
  @ApiResponse({ status: 201, description: "Successful Login" })
  @ApiResponse({ status: 400, description: "Bad Request" })
  @ApiResponse({ status: 401, description: "Unauthorized" })
  async updateMessage(
    @Param("id", new ParseUUIDPipe()) id: string,
    @Body() body: Partial<MessagePayload>,
  ): Promise<any> {
    return await this.messagesService.updateMessage(id, body);
  }

  @Delete(":id")
  @UseGuards(JwtAuthGuard)
  @ApiResponse({ status: 201, description: "Successful Login" })
  @ApiResponse({ status: 400, description: "Bad Request" })
  @ApiResponse({ status: 401, description: "Unauthorized" })
  async deleteMessage(@Param("id", new ParseUUIDPipe()) id: string,
    @UsersDecorator() user: Partial<Users>): Promise<DeleteResult> {
    return await this.messagesService.deleteMessage(id, user);
  }
}
