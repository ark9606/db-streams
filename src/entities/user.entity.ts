import { Entity, Column, PrimaryColumn } from 'typeorm';

import { EntityBase } from './entity.base';

@Entity('users')
export class User extends EntityBase {
  @PrimaryColumn()
  id: number;

  @Column()
  username: string;

  @Column({ nullable: true })
  fullname: string;

  @Column({ nullable: true })
  SPId: string;

  @Column({ nullable: true })
  role: string;
}
