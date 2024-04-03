import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { readUserDTO } from './dto/readUserDTO.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async createUser(req: UserEntity): Promise<void> {
    const exist = this.userRepository.findOneBy({ name: req.name });
    if (exist) {
      throw new UnauthorizedException();
    }
    await this.userRepository.save(req);
  }

  async deleteUser(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }

  async getUserInfo(): Promise<readUserDTO[]> {
    const userInfo = await this.userRepository.find();
    return userInfo;
  }
}
