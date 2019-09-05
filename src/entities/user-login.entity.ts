import { Entity, Column, PrimaryColumn } from 'typeorm';

import { EntityBase } from './entity.base';

@Entity('user-logins')
export class UserLogin extends EntityBase {
  @PrimaryColumn()
  userId: number;

  @Column()
  username: string;

  @Column({ nullable: true })
  fullname: string;

  @Column()
  token: string;

  @Column()
  role: string;
}
