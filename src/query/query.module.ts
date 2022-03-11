import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { QueryController } from './query.controller';
import { QueryModel } from './query.model';

@Module({
  controllers: [QueryController],
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: QueryModel,
        schemaOptions: {
          collection: 'Query',
        },
      },
    ]),
  ],
})
export class QueryModule {}
