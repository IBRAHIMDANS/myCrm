import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '../../entities';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {

  constructor(
    private readonly usersService: UsersService,
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
  ) {
  }


  async createToken(user: User): Promise<{
    expiresIn: string; firstName: string; lastName: string; id: string; accessToken: string; email: string;
    // player: Players
  }> {
    return {
      expiresIn: this.configService.get('auth.expiresIn'),
      accessToken: this.jwtService.sign({ id: user.id }),
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      id: user.id,
    };
  }

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.getByEmailAndPass(email, pass);
    // console.log(user);
    // if(user.isActive === false) {
    //   throw new UnauthorizedException('user is inactive!');
    // }
    if(!user) {
      throw new UnauthorizedException('Wrong login combination! user are is not active or exist');
    }
    return user;

  }
}
