import { Module } from '@nestjs/common';
import { ElasticsearchModule } from './elasticsearch/elasticsearch.module';
import { UserModule } from './user/user.module';
import { PlaylistService } from './playlist/playlist.service';
import { PlaylistModule } from './playlist/playlist.module';
import { MusicController } from './music/music.controller';
import { MusicModule } from './music/music.module';

@Module({
  imports: [ElasticsearchModule, UserModule, PlaylistModule, MusicModule],
  controllers: [MusicController],
  providers: [PlaylistService],
})
export class AppModule {}
