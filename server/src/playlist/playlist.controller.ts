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

  @Get('playlist')
  async findAllPlay(): Promise<PlaylistReadDTO[]> {
    return this.playlistService.findAll();
  }

  @Post()
  async createPlaylist(@Body() req: PlaylistEntity): Promise<void> {
    await this.playlistService.createPlaylist(req);
  }

  @Delete('/:id')
  async deletePlaylist(@Param('id') id: number): Promise<void> {
    await this.playlistService.deletePlaylist(id);
  }

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
