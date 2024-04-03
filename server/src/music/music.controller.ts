import {
  Body,
  Controller,
  Param,
  Post,
  Get,
  Delete,
  Patch,
} from '@nestjs/common';
import { MusicService } from './music.service';
import { MusicEntity } from './entities/music.entity';
import { MusicReadDTO } from './dto/musicRead.dto';
import { UpdateMusicDTO } from './dto/musicUpdate.dto';

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

  @Patch('/:id')
  async updateMusic(
    @Param('id') id: number,
    req: UpdateMusicDTO,
  ): Promise<void> {
    await this.musicService.updateMusicInfo(id, req);
  }

  @Delete('/:id')
  async deleteMusic(@Param('id') id: number): Promise<void> {
    await this.musicService.deleteMusic(id);
  }
}
