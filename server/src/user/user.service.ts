import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { readUserDTO } from './dto/readUserDTO.dto';
import { LogIn } from './dto/login.dto';
import { PlaylistEntity } from 'src/playlist/entities/playlist.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    @InjectRepository(PlaylistEntity)
    private playlistRepository: Repository<PlaylistEntity>,
  ) {}

  // async logIn(req: LogIn): Promise<Number> {
  //   const user = await this.userRepository.findOne({ where: { uid: req.uid } });
  //   if (!user.uid || !user.password) {
  //     throw new UnauthorizedException();
  //   }
  //   return user.id;
  // }
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
    const exist = await this.userRepository.findOneBy({ uid: req.uid });
    if (exist) {
      throw new NotFoundException('이미 유저가 있습니다.');
    }
    await this.userRepository.save(this.userRepository.create(req));
  }

  async findUser(uid: string): Promise<readUserDTO> {
    const userInfo = await this.userRepository.findOneBy({ uid });
    return {
      password: userInfo.password,
      nickName: userInfo.nickName,
      id: userInfo.id,
      uid: userInfo.uid,
    };
  }
  // user의 uid를 매개변수로 받아 사용자를 찾고, 해당 사용자에 연결된 플레이리스트를 반환
  async findPlaylistByUser(id: number): Promise<PlaylistEntity[]> {
    const userInfo = await this.userRepository.findOneBy({ id });

    if (!userInfo) {
      throw new NotFoundException('유저를 찾을 수 없음');
    }
    const playlists = await this.playlistRepository.find({
      where: { user: userInfo },
    });

    return playlists;
  }

  async login(LogIn: LogIn): Promise<boolean> {
    const { uid, password } = LogIn;
    const user = await this.findUser(uid);
    if (user && user.password === password) {
      return true;
    }
    return false;
  }
}
