import { Body, Controller, Param, Post, Get, Delete } from '@nestjs/common';
import { MusicService } from './music.service';
import { MusicEntity } from './entities/music.entity';
import { MusicReadDTO } from './dto/musicRead.dto';

@Controller('music')
export class MusicController {
  constructor(private readonly musicService: MusicService) {}

  // 음악 1개 가져오기
  @Get('/:id')
  async getMusic(@Param('id') id: number): Promise<MusicReadDTO> {
    return this.musicService.getMusicInfo(id);
  }

  // 음악 추가
  @Post()
  async createMusic(@Body() req: MusicEntity): Promise<void> {
    await this.musicService.createMusic(req);
  }

  // 음악 삭제
  @Delete('/:id')
  async deleteMusic(@Param('id') id: number): Promise<void> {
    await this.musicService.deleteMusic(id);
  }
}
