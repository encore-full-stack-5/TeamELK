import { Body, Controller, Param, Post, Get, Delete } from '@nestjs/common';
import { MusicService } from './music.service';
import { MusicEntity } from './entities/music.entity';
import { MusicReadDTO } from './dto/musicRead.dto';

@Controller('music')
export class MusicController {
  constructor(private readonly musicService: MusicService) {}
  @Post()
  async createMusic(@Body() req: MusicEntity): Promise<void> {
    await this.musicService.createMusic(req);
  }
  @Get('/:id')
  async getMusic(@Param('id') id: number): Promise<MusicReadDTO> {
    return this.musicService.getMusicInfo(id);
  }
  @Delete()
  async deleteMusic(@Param() id: number): Promise<void> {
    await this.musicService.deleteMusic(id);
  }
}
