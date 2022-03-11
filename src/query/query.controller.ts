import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { QueryModel } from './query.model';

@Controller('query')
export class QueryController {
  @Post('create')
  async create(@Body() dto: Omit<QueryModel, 'id'>) {
    return;
  }

  @Get(':id')
  async get(@Param('id') id: string) {
    return;
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return;
  }

  @Patch(':id')
  async patch(@Param('id') id: string, @Body() dto: QueryModel) {
    return;
  }

  @Get(':project_id')
  async find(@Param('project_id') project_id: string) {
    return;
  }
}
