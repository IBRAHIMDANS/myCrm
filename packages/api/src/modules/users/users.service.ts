import {
  ConflictException,
  Injectable,
  NotAcceptableException,
} from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Users } from "../../entities";
import { RegisterPayload } from "../auth/payloads";
import crypto from "crypto";
import { passwordGenerator } from "../../lib/passwordGen";

@Injectable()
export class UsersService {

  constructor(@InjectRepository(Users)
  private readonly usersRepository: Repository<Users>) {
  }

  async getAll(): Promise<Users[]> {
    return await this.usersRepository.find({ isActive: true });
  }

  async findOne(email: string): Promise<Users | undefined> {
    return await this.usersRepository.findOneOrFail({ email: email });
  }

  async get(id: string) {
    return await this.usersRepository.findOne(id).then(result => {
      return result;
    });
  }


  async getByEmail(email: string): Promise<Users> {
    return await this.usersRepository.createQueryBuilder("users")
      .where("users.email = :email")
      .setParameter("email", email)
      .getOne();
  }

  async create(userPayload: RegisterPayload): Promise<Partial<Users>> {
    const existedUser = await this.getByEmail(userPayload.email);
    if (existedUser) {
      throw new NotAcceptableException("User with provided email already created.");
    }
    const user = await this.usersRepository.create(userPayload);
    const _password = userPayload.password || passwordGenerator();
    user.password = _password;
    try {
      return await this.save(user, _password);
    } catch (error) {
      throw new ConflictException(error);
    }
  }

  async save(user: Users, password: string): Promise<Partial<Users>> {
    try {
      return await this.usersRepository.save(user);
      // .then(async () =>{
      // // await this.emailService.sendMailRegister(user, password)
      // })
      // .catch(e => e.message);
    } catch (error) {
      throw new ConflictException(error);
    }
  }

  async getByEmailAndPass(email: string, password: string): Promise<Users> {
    const passHash = crypto.createHmac("sha256", password).digest("hex");
    return await this.usersRepository.createQueryBuilder("users")
      .where("users.email = :email and users.password = :password")
      .setParameter("email", email)
      .setParameter("password", passHash)
      .getOne();
  }
}
