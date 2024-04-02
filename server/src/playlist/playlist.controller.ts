import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { PlaylistService } from './playlist.service';
import { PlaylistEntity } from './entities/playlist.entity';

@Controller('playlist')
export class PlaylistController {
  constructor(private readonly playlistService: PlaylistService) {}

  @Post()
  async createPlaylist(@Body() req: PlaylistEntity): Promise<void> {
    await this.playlistService.createPlaylist(req);
  }

  @Get('/:id')
  async viewPlaylist(@Param('id') id: number, @Req() req: any): Promise<any> {
    return this.playlistService.getALLPlaylistInfoByUser(id, req);
  }
}
