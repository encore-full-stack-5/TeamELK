import { Module } from '@nestjs/common';
import { SearchModule } from './search/search.module';
import { UserModule } from './user/user.module';
import { PlaylistService } from './playlist/playlist.service';
import { PlaylistModule } from './playlist/playlist.module';
import { MusicController } from './music/music.controller';
// import { MusicModule } from './music/music.module';

@Module({
  imports: [SearchModule, UserModule, PlaylistModule /*, MusicModule*/],
  controllers: [MusicController],
  providers: [PlaylistService],
})
export class AppModule {}
