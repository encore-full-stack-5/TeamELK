import { Module } from '@nestjs/common';
import { ElasticsearchController } from './elasticsearch.controller';
import { ElasticsearchService } from './elasticsearch.service';

@Module({
  controllers: [ElasticsearchController],
  providers: [ElasticsearchService]
})
export class ElasticsearchModule {}
