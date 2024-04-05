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
//import { readUserDTO } from './dto/readUserDTO.dto';
import { PlaylistEntity } from 'src/playlist/entities/playlist.entity';
import { LogIn } from './dto/login.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  // @Post('/login')
  // async logIn(@Body() req: LogIn): Promise<Number> {
  //   return this.userService.logIn(req);
  // }

  @Post()
  async createUser(@Body() req: UserEntity): Promise<void> {
    await this.userService.createUser(req);
  }

  @Get('/:id')
  //async getUser(@Param('id') id: number): Promise<readUserDTO> {
  async getUser(@Param('id') id: number): Promise<PlaylistEntity[]> {
    //return this.userService.findUser(id);
    return this.userService.findPlaylistByUser(id);
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
  }
  @Post('login')
  async login(@Body() loginDto: LogIn): Promise<boolean> {
    const isSuccess = await this.userService.login(loginDto);
    if (isSuccess) {
      return true;
    } else {
      return false;
    }
  }
}
