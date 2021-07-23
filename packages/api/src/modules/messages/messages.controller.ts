import {
  Body,
  Controller, Delete,
  Get, Param, ParseIntPipe, Patch,
  Post,
  Request,
  UseGuards,
} from "@nestjs/common";
import { ApiResponse } from "@nestjs/swagger";
import { MessagesService } from "./messages.service";
import { MessagePayload } from "./payload/MessagePayload";
import { JwtAuthGuard } from "../auth";

@Controller("messages")
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {
  }

  @Get(":id")
  @UseGuards(JwtAuthGuard)
  @ApiResponse({ status: 201, description: "Successful Login" })
  @ApiResponse({ status: 400, description: "Bad Request" })
  @ApiResponse({ status: 401, description: "Unauthorized" })
  async getMessage(@Param("id")  id: string, @Request() req): Promise<any> {
    return await this.messagesService.getMessage(id, req.user);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiResponse({ status: 201, description: "Successful Login" })
  @ApiResponse({ status: 400, description: "Bad Request" })
  @ApiResponse({ status: 401, description: "Unauthorized" })
  async getUserMessages(@Request() req): Promise<any> {
    return await this.messagesService.getUserMessages(req.user);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiResponse({ status: 201, description: "Successful Login" })
  @ApiResponse({ status: 400, description: "Bad Request" })
  @ApiResponse({ status: 401, description: "Unauthorized" })
  async postMessage(@Request() req,
    @Body() body: MessagePayload): Promise<any> {
    return await this.messagesService.postMessage(req.user, body);
  }
  @Patch(":id")
  @UseGuards(JwtAuthGuard)
  @ApiResponse({ status: 201, description: "Successful Login" })
  @ApiResponse({ status: 400, description: "Bad Request" })
  @ApiResponse({ status: 401, description: "Unauthorized" })
  async updateMessage(@Param("id")  id: string, @Request() req): Promise<any> {
    return await this.messagesService.updateMessage(id, req.user);
  }
  @Delete(":id")
  @UseGuards(JwtAuthGuard)
  @ApiResponse({ status: 201, description: "Successful Login" })
  @ApiResponse({ status: 400, description: "Bad Request" })
  @ApiResponse({ status: 401, description: "Unauthorized" })
  async deleteMessage(@Param("id")  id: string, @Request() req): Promise<any> {
    return await this.messagesService.deleteMessage(id, req.user);
  }
}
