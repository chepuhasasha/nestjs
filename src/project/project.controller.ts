import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ProjectModel } from './project.model';

@Controller('project')
export class ProjectController {
  @Post('create')
  async create(@Body() dto: Omit<ProjectModel, 'id'>) {
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
  async patch(@Param('id') id: string, @Body() dto: ProjectModel) {
    return;
  }

  @Get(':user_id')
  async find(@Param('user_id') user_id: string) {
    return;
  }
}
