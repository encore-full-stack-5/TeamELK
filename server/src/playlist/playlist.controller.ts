import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { PlaylistService } from './playlist.service';
import { PlaylistEntity } from './entities/playlist.entity';
import { PlaylistReadDTO } from './dto/playListRead.dto';

@Controller('playlist')
export class PlaylistController {
  constructor(private readonly playlistService: PlaylistService) {}

  @Post()
  async createPlaylist(@Body() req: PlaylistEntity): Promise<void> {
    await this.playlistService.createPlaylist(req);
  }

  @Get('playlist')
  async findAllPlay(): Promise<PlaylistReadDTO[]> {
    return this.playlistService.findAll();
  }

  @Delete('/:id')
  async deleteMusic(@Param('id') id: number): Promise<void> {
    await this.playlistService.deletePlaylist(id);
  }

  // @Get('/:id')
  // async viewPlaylist(@Param('id') id: number, @Req() req: any): Promise<any> {
  //   return this.playlistService.getALLPlaylistInfoByUser(id, req);
  // }

  @Patch('/:id')
  async updatePlaylist(
    @Param('id') id: number,
    @Body() req: PlaylistEntity,
  ): Promise<void> {
    await this.playlistService.updatePlaylist(id, req);
  }

  @Get('/:id')
  async findPlayById(@Param('id') id: number): Promise<PlaylistReadDTO> {
    return await this.playlistService.findById(id);
  }
}
