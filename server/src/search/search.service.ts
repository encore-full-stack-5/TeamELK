import { Client } from '@elastic/elasticsearch';
import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { InputSearchDTO } from './dto/inputSearchDTO.dto';

@Injectable()
export class SearchService {
  constructor(private readonly elasticsearchService: ElasticsearchService) {}

  async getSearch(word: string) {
    const result = await this.elasticsearchService.search({
      index: 'music',
      query: {
        multi_match: {
          query: word,
          fields: ['*'],
        },
      },
    });
    return result;
  }

  async createIndex(req: InputSearchDTO): Promise<void> {
    await this.elasticsearchService.index({
      index: 'music',
      document: req,
    });
  }
}
export { ElasticsearchService };
