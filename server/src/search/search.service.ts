import { Client } from '@elastic/elasticsearch';
import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';

@Injectable()
export class SearchService {
  constructor(private readonly elasticsearchService: ElasticsearchService) {}

  async getSearch(word: string) {
    const result = await this.elasticsearchService.search({
      index: 'asd',
      body: {
        query: {
          match: {
            title: word,
          },
        },
      },
    });
    return result;
  }
}
export { ElasticsearchService };
