import { Injectable } from '@nestjs/common';
import { ModelType, DocumentType } from '@typegoose/typegoose/lib/types';
import { CreateQueryDTO } from './dto/create-query.dto';
import { QueryModel } from './query.model';
import { Types } from 'mongoose';
import { InjectModel } from 'nestjs-typegoose';

@Injectable()
export class QueryService {
  constructor(
    @InjectModel(QueryModel) private readonly queryModel: ModelType<QueryModel>,
  ) {}

  async create(dto: CreateQueryDTO): Promise<DocumentType<QueryModel>> {
    return this.queryModel.create(dto);
  }

  async delete(id: string): Promise<DocumentType<QueryModel> | null> {
    return this.queryModel.findByIdAndDelete(id).exec();
  }

  async deleteByProjectId(project_id: string) {
    return this.queryModel
      .deleteMany({
        project_id: new Types.ObjectId(project_id),
      })
      .exec();
  }

  async findByProjectId(
    project_id: string,
  ): Promise<DocumentType<QueryModel>[]> {
    return this.queryModel
      .find({ project_id: new Types.ObjectId(project_id) })
      .exec();
  }

  async findById(id: string): Promise<DocumentType<QueryModel>> {
    return this.queryModel.findById(id).exec();
  }
  async patch(
    id: string,
    dto: CreateQueryDTO,
  ): Promise<DocumentType<QueryModel>> {
    return this.queryModel
      .findOneAndUpdate({ _id: new Types.ObjectId(id) }, dto)
      .exec();
  }
}
