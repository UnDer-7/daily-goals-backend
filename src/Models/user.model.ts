import { Base } from './base.model';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'USER' })
export class User extends Base{

  @Entity({ name: 'name' })
  public name!: string;

  @Column({ name: 'email' })
  public email!: string;

  @Column({ name: 'password' })
  public password!: string;
}
