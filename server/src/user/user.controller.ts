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
import { readUserDTO } from './dto/readUserDTO.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post()
  async createUser(@Body() req: UserEntity): Promise<void> {
    await this.userService.createUser(req);
  }
  @Get('/:id')
  async getUser(@Param('id') id: number): Promise<readUserDTO> {
    return this.userService.findUser(id);
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
}
