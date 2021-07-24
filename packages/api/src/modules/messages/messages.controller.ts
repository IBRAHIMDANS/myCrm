import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
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
import { DeepPartial, DeleteResult, UpdateResult } from "typeorm";

@Controller("messages")
@ApiTags('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {
  }

  @Get("receive")
  @UseGuards(JwtAuthGuard)
  @ApiResponse({ status: 201, description: "Successful Login" })
  @ApiResponse({ status: 400, description: "Bad Request" })
  @ApiResponse({ status: 401, description: "Unauthorized" })
  async getReceiveMessage(@Request() req): Promise<Messages[]> {
    return await this.messagesService.getReceiveMessage(req.user);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiResponse({ status: 201, description: "Successful Login" })
  @ApiResponse({ status: 400, description: "Bad Request" })
  @ApiResponse({ status: 401, description: "Unauthorized" })
  async getUserMessages(@Request() req): Promise<Messages[]> {
    return await this.messagesService.getMessages(req.user);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiResponse({ status: 201, description: "Successful Login" })
  @ApiResponse({ status: 400, description: "Bad Request" })
  @ApiResponse({ status: 401, description: "Unauthorized" })
  async postMessage(@Request() req,
    @Body() body: MessagePayload): Promise<unknown> {
    return await this.messagesService.postMessage(req.user, body);
  }

  @Get(":id")
  @UseGuards(JwtAuthGuard)
  @ApiResponse({ status: 201, description: "Successful Login" })
  @ApiResponse({ status: 400, description: "Bad Request" })
  @ApiResponse({ status: 401, description: "Unauthorized" })
  async getMessage(@Param("id") id: string): Promise<Messages> {
    return await this.messagesService.getMessage(id);
  }

  @Patch(":id")
  @UseGuards(JwtAuthGuard)
  @ApiResponse({ status: 201, description: "Successful Login" })
  @ApiResponse({ status: 400, description: "Bad Request" })
  @ApiResponse({ status: 401, description: "Unauthorized" })
  async updateMessage(@Param("id") id: string,@UsersDecorator() user: Partial<Users>): Promise<UpdateResult> {
    return await this.messagesService.updateMessage(id, user);
  }

  @Delete(":id")
  @UseGuards(JwtAuthGuard)
  @ApiResponse({ status: 201, description: "Successful Login" })
  @ApiResponse({ status: 400, description: "Bad Request" })
  @ApiResponse({ status: 401, description: "Unauthorized" })
  async deleteMessage(@Param("id") id: string,@UsersDecorator() user: Partial<Users>): Promise<DeleteResult> {
    return await this.messagesService.deleteMessage(id, user);
  }
}
