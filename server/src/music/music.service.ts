import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MusicEntity } from './entities/music.entity';
import { Repository } from 'typeorm';
import { MusicReadDTO } from './dto/musicRead.dto';

@Injectable()
export class MusicService {
  constructor(
    @InjectRepository(MusicEntity)
    private musicRepository: Repository<MusicEntity>,
  ) {}

  async createMusic(req: MusicEntity): Promise<void> {
    await this.musicRepository.create(req);
  }

  async getMusicInfo(id: number): Promise<MusicReadDTO> {
    const musicInfo = await this.musicRepository.findOneBy({ id });
    return musicInfo;
  }
}
