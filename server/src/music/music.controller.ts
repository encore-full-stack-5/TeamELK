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

  @Get('music')
  async getAllMusic(): Promise<MusicReadDTO[]> {
    return this.musicService.findAll();
  }
  // 음악 1개 가져오기
  @Get('/:id')
  async getMusic(@Param('id') id: number): Promise<MusicReadDTO> {
    return this.musicService.getMusicInfo(id);
  }

  // 전체 음악 목록 가져오기
  @Get('music')
  async findAllMusic(): Promise<MusicReadDTO[]> {
    return this.musicService.findAll();
  }

  // 음악 추가
  @Post()
  async createMusic(@Body() req: MusicEntity): Promise<void> {
    await this.musicService.createMusic(req);
  }

  // 음악 삭제
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
