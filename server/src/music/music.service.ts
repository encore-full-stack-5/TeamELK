import { Injectable, UnauthorizedException } from '@nestjs/common';
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
    const exist = await this.musicRepository.findOneBy({ title: req.title });
    if (exist) {
      throw new UnauthorizedException();
    }
    await this.musicRepository.save(req);
  }

  async getMusicInfo(id: number): Promise<MusicReadDTO> {
    const musicInfo = await this.musicRepository.findOneBy({ id });
    return musicInfo;
  }

  async deleteMusic(id: number): Promise<void> {
    await this.musicRepository.delete(id);
  }
}
