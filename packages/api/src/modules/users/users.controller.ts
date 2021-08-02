import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import UsersDecorator from '../../decorators/users.decorator';
import { Users } from '../../entities';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from "../auth";


@UseGuards(AuthGuard('jwt'))
@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {
  }

  @Get('/all')
  @ApiBearerAuth()
  // @UseGuards(JwtAuthGuard)
  @ApiResponse({ status: 201, description: 'Successful Registration' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async getAll(@UsersDecorator() user: Partial<Users>) {
    return await this.usersService.getAll();
  }

  @Get('')
  @ApiBearerAuth()
  // @UseGuards(JwtAuthGuard)
  @ApiResponse({ status: 201, description: 'Successful Registration' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async getUser(@UsersDecorator() user: Partial<Users>) {
    return await this.usersService.get(user.id);
  }
}
