import { Controller, Get, Post, Query, Body } from '@nestjs/common';
import { SearchService } from './search.service';
import { InputSearchDTO } from './dto/inputSearchDTO.dto';

@Controller('elasticsearch')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get('/search')
  async getSearch(@Query('title') title: string): Promise<any> {
    return this.searchService.getSearch(title);
  }

  @Post('/create')
  async create(@Body() req: InputSearchDTO): Promise<void> {
    await this.searchService.createIndex(req);
  }
}
