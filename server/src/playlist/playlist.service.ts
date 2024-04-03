import { Body, Injectable, UnauthorizedException } from '@nestjs/common';
import { PlaylistEntity } from './entities/playlist.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { PlaylistReadDTO } from './dto/playListRead.dto';

// import { UserService } from 'src/user/user.service';
// import { UserEntity } from 'src/user/entities/user.entity';
// import { PlaylistReadDTO, UserPlaylistDTO } from './dto/playListRead.dto';

@Injectable()
export class PlaylistService {
  constructor(
    // @InjectRepository(UserEntity)
    // private userRepository: Repository<UserEntity>,
    @InjectRepository(PlaylistEntity)
    private playlistRepository: Repository<PlaylistEntity>,
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    private readonly userService: UserService,
  ) {}

  // 모든 Playlist Read
  async findAll(): Promise<PlaylistReadDTO[]> {
    return this.playlistRepository.find();
  }

  async findOnePlaylist(id: number): Promise<PlaylistReadDTO> {
    const playInfo = await this.playlistRepository.findOneBy({ id });
    const info = { id: playInfo.id, name: playInfo.name };
    return info;
  }

  // Playlist Create
  async createPlaylist(req: PlaylistEntity): Promise<void> {
    const exist = await this.playlistRepository.findOneBy({ name: req.name });
    if (exist) {
      throw new UnauthorizedException();
    }
    await this.playlistRepository.save(this.playlistRepository.create(req));
  }

  // Playlist Delete
  async deletePlaylist(id: number): Promise<void> {
    await this.playlistRepository.delete(id);
  }

  // Playlist Update
  async updatePlaylist(id: number, req: PlaylistEntity): Promise<void> {
    const playInfo = await this.playlistRepository.findOneBy({ id });
    playInfo.name = req.name;
    // playInfo.createAt = req.createAt;

    await this.playlistRepository.save(playInfo);
  }

  // async getALLPlaylistInfoByUser(uid: number): Promise<UserPlaylistDTO> {
  //   const user = await this.userRepository.findOne({ where: { id: uid } });
  //   const playlistInfo: PlaylistReadDTO[] = await this.playlistRepository.find({
  //     relations: {
  //       user: true,
  //     },
  //     where: {
  //       user: {
  //         id: user.id,
  //       },
  //     },
  //   });

  //   const parsePlaylist = playlistInfo.map((v) => {
  //     return {
  //       id: v.id,
  //       name: v.name,
  //     };
  //   });
  //   return {
  //     user: {
  //       id: user.id,
  //       name: user.name,
  //       nickName: user.nickName,
  //     },
  //     playlist: parsePlaylist,
  //   };
  // }
}
