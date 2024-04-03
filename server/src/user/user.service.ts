import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { readUserDTO } from './dto/readUserDTO.dto';
import { UpdateUser } from './dto/userUpdateDTO.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async createUser(req: UserEntity): Promise<void> {
    const exist = await this.userRepository.findOneBy({ id: req.id });
    if (exist) {
      throw new NotFoundException('이미 유저가 있습니다.');
    }
    await this.userRepository.save(this.userRepository.create(req));
  }

  async findUser(name: string): Promise<readUserDTO> {
    const userInfo = await this.userRepository.findOneBy({ name });
    return {
      nickName: userInfo.nickName,
    };
  }

  async updateUser(req: UpdateUser): Promise<void> {
    await this.userRepository.save(req);
  }
}
