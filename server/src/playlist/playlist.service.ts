import {
  Body,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PlaylistEntity } from './entities/playlist.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { MusicByPlaylist, PlaylistReadDTO } from './dto/playListRead.dto';
import { MusicEntity } from 'src/music/entities/music.entity';
import { MusicReadDTO } from 'src/music/dto/musicRead.dto';
import { MappingEntity } from 'src/music/entities/mapping.entity';

// import { UserService } from 'src/user/user.service';
// import { UserEntity } from 'src/user/entities/user.entity';
// import { PlaylistReadDTO, UserPlaylistDTO } from './dto/playListRead.dto';

@Injectable()
export class PlaylistService {
  constructor(
    @InjectRepository(PlaylistEntity)
    private playlistRepository: Repository<PlaylistEntity>,
    @InjectRepository(MusicEntity)
    private musicRepository: Repository<MusicEntity>,
    @InjectRepository(MappingEntity)
    private mappingRepository: Repository<MappingEntity>,
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
    // const mid = await this.mappingRepository.find({
    //   where: {
    //     playlist: {
    //       id: id,
    //     },
    //   },
    // });

    // console.log(mid);

    await this.playlistRepository.delete(id);
  }

  // Playlist Update
  async updatePlaylist(id: number, req: PlaylistEntity): Promise<void> {
    const playInfo = await this.playlistRepository.findOneBy({ id });
    playInfo.name = req.name;
    // playInfo.createAt = req.createAt;

    await this.playlistRepository.save(playInfo);
  }

  /*
  // async musicInPlay(
  //   playlistId: number,
  //   musicId: number,
  // ): Promise<MusicReadDTO[]> {
  //   const playlistMappingMusic = await this.mappingMusicAndPlaylist(
  //     playlistId,
  //     musicId,
  //   );
  // const musics: MusicReadDTO[] = await this.musicRepository.find({
  //   relations: {
  //     mappings: true,
  //   },
  //   where: {
  //     mappings: {
  //       music: playlistMappingMusic.map((v) => v.music),
  //     },
  //   },
  // });

  // return musics;
  // }
*/

  // Read Music in Playlist
  async mappingMusicAndPlaylist(
    playlistId: number,
    // musicId: number,
  ): Promise<MusicByPlaylist> {
    const playlistInfo = await this.playlistRepository.findOneBy({
      id: playlistId,
    });
    const musicMappingPlaylist: MappingEntity[] =
      await this.mappingRepository.find({
        relations: {
          playlist: true,
          music: true,
        },
        where: {
          playlist: {
            id: playlistId,
          },
          //   music: {
          //     id:
          //     musicId,
          //   },
        },
      });

    //select * from MappingEntity
    //join playlist on id = MappingEntity.playlistId
    const musics: MusicReadDTO[] = await this.musicRepository.find({
      relations: {
        mappings: true,
      },
      where: {
        mappings: {
          music: musicMappingPlaylist.map((v) => v.music),
        },
      },
    });
    if (musicMappingPlaylist.length <= 0) {
      throw new NotFoundException();
    }
    // return musicMappingPlaylist;
    const parseMusicAll = musics.map((value) => {
      return {
        singer: value.singer,
        title: value.title,
        genre: value.genre,
        lyrics: value.lyrics,
      };
    });

    return {
      playlist: {
        id: playlistInfo.id,
        name: playlistInfo.name,
      },
      music: parseMusicAll,
    };
  }

  // async findMusicByPlaylist(
  //   playlistId: number,
  //   musicId: number,
  // ): Promise<MusicByPlaylist> {
  //   const playlistInfo = await this.findOnePlaylist(playlistId);
  //   const musics = await this.mappingMusicAndPlaylist(playlistId, musicId);
  //   const parseMusicAll = musics.map((value) => {
  //     return {
  //       singer: value.singer,
  //       title: value.title,
  //       genre: value.genre,
  //       lyrics: value.lyrics,
  //     };
  //   });

  //   return {
  //     playlist: {
  //       id: playlistInfo.id,
  //       name: playlistInfo.name,
  //     },
  //     music: parseMusicAll,
  //   };
  // }

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

  async addMusicToPlaylist(pid: number, mid: number): Promise<void> {
    // const musicInfo = await this.musicRepository.findOneBy({ id: mid });
    const musicInfo = new MusicEntity(mid);
    // const playlistInfo = await this.playlistRepository.findOneBy({ id: pid });
    const playlistInfo = new PlaylistEntity(pid);

    const exist = await this.mappingRepository.find({
      relations: {
        playlist: true,
        music: true,
      },
      where: {
        playlist: {
          id: playlistInfo.id,
        },
        music: {
          id: musicInfo.id,
        },
      },
    });
    console.log(exist);
    if (exist.length > 0) {
      throw new Error('이미 있는 곡입니다.');
    }

    await this.mappingRepository.save({
      playlist: playlistInfo,
      music: musicInfo,
    });
  }

  async deleteMusicToPlaylist(
    playlistId: number,
    musicId: number,
  ): Promise<void> {
    const mid = await this.mappingRepository.find({
      relations: {
        playlist: true,
        music: true,
      },
      where: {
        playlist: {
          id: playlistId,
        },
        music: {
          id: musicId,
        },
      },
    });
    console.log(mid);
    const mappingId = mid[0].id;
    console.log(mappingId);
    if (mid.length > 0) {
      await this.mappingRepository.delete({ id: mappingId });
    } else {
      throw new Error('없는 곡입니다.');
    }
  }
}
