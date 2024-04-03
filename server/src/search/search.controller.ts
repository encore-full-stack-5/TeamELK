import { Controller, Get } from '@nestjs/common';
import { SearchService } from './search.service';

@Controller('elasticsearch')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get('/search')
  async getSearch(word: string): Promise<any> {
    return this.searchService.getSearch(word);
  }
}
