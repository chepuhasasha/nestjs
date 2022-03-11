import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { ProjectController } from './project.controller';
import { ProjectModel } from './project.model';

@Module({
  controllers: [ProjectController],
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: ProjectModel,
        schemaOptions: {
          collection: 'Project',
        },
      },
    ]),
  ],
})
export class ProjectModule {}
