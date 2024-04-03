<<<<<<< HEAD
import { Injectable, UnauthorizedException } from '@nestjs/common';
=======
import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
>>>>>>> 1540e80d1e60e481825dffc649c2aa2c9a9ff4b3
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

<<<<<<< HEAD
  async createUser(req: UserEntity): Promise<void> {
    const exist = await this.userRepository.findOneBy({ name: req.name });
    if (exist) {
      throw new UnauthorizedException();
    }
    await this.userRepository.save(req);
  }

  async getUserInfo(): Promise<readUserDTO[]> {
    const userInfo = await this.userRepository.find();
    return userInfo;
  }
=======
  async getUserInfo(id: number): Promise<readUserDTO> {
    const userInfo = await this.userRepository.findOneBy({ id });
    return userInfo;
  }
  async deleteUser(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
  // updateUser 메소드 추가
  async updateUser(id: number, updatedUserData: UserEntity): Promise<void> {
    const userToUpdate = await this.userRepository.findOneBy({ id });
    if (!userToUpdate) {
      throw new UnauthorizedException('User not found');
    }

    // 업데이트된 사용자 데이터를 기존 사용자에 병합
    Object.assign(userToUpdate, updatedUserData);

    await this.userRepository.save(userToUpdate);
  }

  async createUser(req: UserEntity): Promise<void> {
    const exist = await this.userRepository.findOneBy({ id: req.id });
    if (exist) {
      throw new NotFoundException('이미 유저가 있습니다.');
    }
    await this.userRepository.save(this.userRepository.create(req));
  }

  async findUser(id: number): Promise<readUserDTO> {
    const userInfo = await this.userRepository.findOneBy({ id });
    return {
      nickName: userInfo.nickName,
    };
  }
>>>>>>> 1540e80d1e60e481825dffc649c2aa2c9a9ff4b3
}
