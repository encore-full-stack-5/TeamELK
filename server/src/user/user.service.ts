import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { readUserDTO } from 'src/user/dto/readUserDTO.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}
  async createUser(req: UserEntity): Promise<void> {
    const exist = await this.userRepository.findOneBy({ uid: req.uid });
    if (exist) {
      throw new UnauthorizedException();
    }
    await this.userRepository.save(req);
  }
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
}
