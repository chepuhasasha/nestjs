/* eslint-disable @typescript-eslint/no-empty-interface */
import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

export interface ProjectModel extends Base {}
export class ProjectModel extends TimeStamps {
  @prop()
  title: string;
}
