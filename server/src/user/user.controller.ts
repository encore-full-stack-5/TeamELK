<<<<<<< HEAD
import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { UserEntity } from './entities/user.entity';
import { UserService } from './user.service';
=======
import {
  Body,
  Controller,
  Param,
  Post,
  Get,
  Delete,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserEntity } from './entities/user.entity';
>>>>>>> 1540e80d1e60e481825dffc649c2aa2c9a9ff4b3
import { readUserDTO } from './dto/readUserDTO.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
<<<<<<< HEAD

=======
>>>>>>> 1540e80d1e60e481825dffc649c2aa2c9a9ff4b3
  @Post()
  async createUser(@Body() req: UserEntity): Promise<void> {
    await this.userService.createUser(req);
  }
<<<<<<< HEAD

  //   create update delete getAllUserInfoByName

  @Get('/users')
  async getAllUser(): Promise<readUserDTO[]> {
    return this.userService.getUserInfo();
=======
  @Get('/:id')
  async getUser(@Param('id') id: number): Promise<readUserDTO> {
    return this.userService.getUserInfo(id);
  }

  @Delete('/:id')
  async deleteMusic(@Param('id') id: number): Promise<void> {
    await this.userService.deleteUser(id);
  }
  @Put('/:id')
  async updateUser(
    @Param('id') id: number,
    @Body() updatedUserData: UserEntity,
  ): Promise<void> {
    await this.userService.updateUser(id, updatedUserData);
>>>>>>> 1540e80d1e60e481825dffc649c2aa2c9a9ff4b3
  }
}
