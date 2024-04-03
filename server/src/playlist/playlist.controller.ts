import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { PlaylistService } from './playlist.service';
import { PlaylistEntity } from './entities/playlist.entity';
import { PlaylistReadDTO } from './dto/playListRead.dto';

@Controller('playlist')
export class PlaylistController {
  constructor(private readonly playlistService: PlaylistService) {}

  // 모든 Playlist를 가지고옴
  @Get('playlist')
  async findAllPlay(): Promise<PlaylistReadDTO[]> {
    return this.playlistService.findAll();
  }

  // id 값으로 하나의 Playlist 가지고옴
  @Get(':id')
  async findOnePlaylist(@Param('id') id: number): Promise<PlaylistReadDTO> {
    return await this.playlistService.findOnePlaylist(id);
  }

  // Playlist 추가
  @Post()
  async createPlaylist(@Body() req: PlaylistEntity): Promise<void> {
    await this.playlistService.createPlaylist(req);
  }

  // Playlist 삭제
  @Delete('/:id')
  async deletePlaylist(@Param('id') id: number): Promise<void> {
    await this.playlistService.deletePlaylist(id);
  }

  // Playlist 수정
  @Patch('/:id')
  async updatePlaylist(
    @Param('id') id: number,
    @Body() req: PlaylistEntity,
  ): Promise<void> {
    await this.playlistService.updatePlaylist(id, req);
  }

  // @Get('/:id')
  // async viewPlaylist(@Param('id') id: number): Promise<any> {
  //   return this.playlistService.getALLPlaylistInfoByUser(id);
  // }
}
