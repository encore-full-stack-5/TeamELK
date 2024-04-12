import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { InputSearchDTO } from './dto/inputSearchDTO.dto';

@Injectable()
export class SearchService {
  constructor(private readonly elasticsearchService: ElasticsearchService) {}

  async getSearch(word: string) {
    const result = await this.elasticsearchService.search({
      index: 'music',
      min_score: 0.5,
      query: {
        multi_match: {
          query: word,
          fields: ['*'],
        },
      },
    });
    const musicData = result.hits.hits.map((v) => {
      return v._source;
    });

    return musicData;
  }

  async createIndex(req: InputSearchDTO): Promise<void> {
    await this.elasticsearchService.index({
      index: 'music',
      document: req,
    });
  }
}
export { ElasticsearchService };
