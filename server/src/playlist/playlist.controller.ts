import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { PlaylistService } from './playlist.service';
import { PlaylistEntity } from './entities/playlist.entity';
type dto = { id: string; name: string };
@Controller('playlist')
export class PlaylistController {
  constructor(private readonly playlistService: PlaylistService) {}

  @Post()
  async createPlaylist(@Body() req: PlaylistEntity): Promise<void> {
    await this.playlistService.createPlaylist(req);
  }

  @Get('/:id')
  async viewPlaylist(@Param('id') id: number): Promise<any> {
    return this.playlistService.getALLPlaylistInfoByUser(id);
  }
}
