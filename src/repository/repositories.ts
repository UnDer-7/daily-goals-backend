import { EntitySchema, getManager, ObjectType, Repository } from 'typeorm';

export class Repositories {
  public static getRepository<T>(entity: ObjectType<T> | EntitySchema<T> | string): Repository<T> {
    return getManager().getRepository(entity);
  }
}
