/* eslint-disable @typescript-eslint/no-empty-interface */
import { prop } from '@typegoose/typegoose';
import { Types } from 'mongoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

export class ObjectProp {
  @prop()
  name: string;
  @prop()
  value: string;
}
export interface QueryModel extends Base {}
export class QueryModel extends TimeStamps {
  @prop()
  title: string;

  @prop()
  url: string;

  @prop()
  method: string;

  @prop()
  body: string;

  @prop({ type: () => [ObjectProp], _id: false })
  params: ObjectProp[];

  @prop({ type: () => [ObjectProp], _id: false })
  headers: ObjectProp[];

  @prop()
  doc: string;

  @prop()
  project_id: Types.ObjectId;
}
