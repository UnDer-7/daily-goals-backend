import { PrimaryGeneratedColumn } from 'typeorm';

export class Base {

  @PrimaryGeneratedColumn()
  public id!: number;
}
