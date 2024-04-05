import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MusicEntity } from './entities/music.entity';
import { Repository } from 'typeorm';
import { MusicReadDTO } from './dto/musicRead.dto';
import { UpdateMusicDTO } from './dto/musicUpdate.dto';
import { InputSearchDTO } from 'src/search/dto/inputSearchDTO.dto';
import { SearchService } from 'src/search/search.service';

@Injectable()
export class MusicService {
  constructor(
    @InjectRepository(MusicEntity)
    private musicRepository: Repository<MusicEntity>,
    private searchService: SearchService,
  ) {}

  // 모든 음악 Read
  async findAll(): Promise<MusicReadDTO[]> {
    return this.musicRepository.find();
  }

  async create(params: {
    elk: InputSearchDTO;
    db: MusicEntity;
  }): Promise<void> {
    await this.createMusic(params.db);

    const findMusic = await this.musicRepository.findOneBy({
      id: params.db.id,
    });
    console.log(findMusic);
    await this.searchService.createIndex(findMusic);
  }

  async createMusic(req: MusicEntity): Promise<void> {
    const exist = await this.musicRepository.findOneBy({ title: req.title });
    if (exist) {
      throw new UnauthorizedException();
    }
    await this.musicRepository.save(req);
  }

  async getMusic(id: number): Promise<any> {
    return;
  }

  async getMusicInfo(id: number): Promise<MusicReadDTO> {
    const musicInfo = await this.musicRepository.findOneBy({ id });
    return musicInfo;
  }

  async updateMusicInfo(id: number, req: UpdateMusicDTO): Promise<void> {
    const music = await this.musicRepository.findOneBy({ id });
    if (!music) {
      throw new Error('없는 계정입니다.');
    }
    await this.musicRepository.save({
      singer: req.singer,
      title: req.title,
      genre: req.genre,
      lyrics: req.lyrics,
    });
  }
  async deleteMusic(id: number): Promise<void> {
    await this.musicRepository.delete(id);
  }
}
