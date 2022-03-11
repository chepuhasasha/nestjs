import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { QueryModule } from './query/query.module';
import { ProjectModule } from './project/project.module';

@Module({
  imports: [AuthModule, QueryModule, ProjectModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
