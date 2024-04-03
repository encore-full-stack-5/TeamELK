import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserEntity } from './entities/user.entity';
import { readUserDTO } from './dto/readUserDTO.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() req: UserEntity): Promise<void> {
    await this.userService.createUser(req);
  }

  @Get('/users')
  async getAllUser(): Promise<readUserDTO[]> {
    return this.userService.getUserInfo();
  }

  @Delete()
  async deleteUser(@Param('id') id: number): Promise<void> {
    await this.userService.deleteUser(id);
  }
}
