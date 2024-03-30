import { Module } from '@nestjs/common';
import { SearchController } from './search.controller';
import { SearchService } from './search.service';
import { ElasticsearchModule } from '@nestjs/elasticsearch';

@Module({
  imports: [ElasticsearchModule.register({
    nodes: ['http://192.168.80.43:9200', 'http://192.168.80.16:9200', 'http://192.168.80.37:9200']
  })],
  controllers: [SearchController],
  providers: [SearchService]
})
export class SearchModule {}
