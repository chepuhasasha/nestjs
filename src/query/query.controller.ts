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
  Query,
} from '@nestjs/common';
import { CreateQueryDTO } from './dto/create-query.dto';
import { QUERY_NOT_FOUND } from './query.constants';
import { QueryService } from './query.service';

@Controller('query')
export class QueryController {
  constructor(private readonly queryService: QueryService) {}
  @Post('/')
  async create(@Body() dto: CreateQueryDTO) {
    return this.queryService.create(dto);
  }

  @Get('/')
  async get(@Query('id') id: string, @Query('project_id') project_id: string) {
    if (id) {
      return this.queryService.findById(id);
    } else if (project_id) {
      return this.queryService.findByProjectId(project_id);
    }
  }

  @Delete('/')
  async delete(
    @Query('id') id: string,
    @Query('project_id') project_id: string,
  ) {
    if (id) {
      const deletedDoc = this.queryService.delete(id);
      if (!deletedDoc) {
        throw new HttpException(QUERY_NOT_FOUND, HttpStatus.NOT_FOUND);
      }
      return deletedDoc;
    } else if (project_id) {
      const deletedDocs = this.queryService.deleteByProjectId(project_id);
      if (!deletedDocs) {
        throw new HttpException(QUERY_NOT_FOUND, HttpStatus.NOT_FOUND);
      }
      return deletedDocs;
    }
  }

  @Patch('/')
  async patch(@Query('id') id: string, @Body() dto: CreateQueryDTO) {
    return this.queryService.patch(id, dto);
  }
}
