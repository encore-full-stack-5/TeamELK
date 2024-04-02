import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { UserEntity } from './entities/user.entity';
import { UserService } from './user.service';
import { readUserDTO } from './dto/readUserDTO.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() req: UserEntity): Promise<void> {
    await this.userService.createUser(req);
  }

  //   create update delete getAllUserInfoByName

  @Get('/users')
  async getAllUser(): Promise<readUserDTO[]> {
    return this.userService.getUserInfo();
  }
}
