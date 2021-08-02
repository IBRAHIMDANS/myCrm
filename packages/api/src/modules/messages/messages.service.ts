import {
  ConflictException,
  ForbiddenException,
  Injectable,
} from "@nestjs/common";
import { MessagePayload } from "./payload/MessagePayload";
import { Users } from "../../entities";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import Messages from "../../entities/Messages.entity";

@Injectable()
export class MessagesService {

  constructor(@InjectRepository(Messages)
    private readonly messagesRepository: Repository<Messages>,
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
  ) {
  }

  async getMessages(user: Partial<Users>): Promise<Messages[]> {
    return await this.messagesRepository.find({ user: user });
  }

  async getReceiveMessage(user: Partial<Users>): Promise<Messages[]> {
    return await this.messagesRepository.find({ where: { receiverUser: user } });
  }

  async getMessage(id: string): Promise<Messages> {
    return await this.messagesRepository.findOne(id)
  }

  async postMessage(user: Users, body: MessagePayload): Promise<Messages> {
    const receiverUser = await this.usersRepository.findOne(body.receiverId);
    if (!receiverUser) throw new ForbiddenException("user not exist!");
    const message = await this.messagesRepository.create({
      ...body,
      user,
      receiverUser,
    });
    return await this.messagesRepository.save(message);
  }

  async updateMessage(id: string,
    body: Partial<MessagePayload>): Promise<UpdateResult> {
    try {
      return await this.messagesRepository
        .createQueryBuilder()
        .update({ ...body })
        .where("id = :id", { id })
        .returning("*")
        .execute();
    } catch (error) {
      throw new ConflictException(error);
    }
  }

  async deleteMessage(id: string, user: Partial<Users>): Promise<DeleteResult> {
    try {
      return await this.messagesRepository
        .createQueryBuilder()
        .delete()
        .where("id= :id AND userId= :userId", { id: id, userId: user.id })
        .returning("*")
        .execute();
    } catch (error) {
      throw new ConflictException(error);
    }
  }
}
