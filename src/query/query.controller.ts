import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateQueryDTO } from './dto/create-query.dto';
import { QUERY_NOT_FOUND } from './query.constants';
import { QueryService } from './query.service';

@Controller('query')
export class QueryController {
  constructor(private readonly queryService: QueryService) {}
  @Post('create')
  async create(@Body() dto: CreateQueryDTO) {
    return this.queryService.create(dto);
  }

  @Get(':id')
  async get(@Param('id') id: string) {
    return this.queryService.findById(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const deletedDoc = this.queryService.delete(id);
    if (!deletedDoc) {
      throw new HttpException(QUERY_NOT_FOUND, HttpStatus.NOT_FOUND);
    }
  }

  @Patch(':id')
  async patch(@Param('id') id: string, @Body() dto: CreateQueryDTO) {
    return this.queryService.patch(id, dto);
  }

  @Get(':project_id')
  async find(@Param('project_id') project_id: string) {
    return this.queryService.findByProjectId(project_id);
  }
}
