import { Entity, Column, PrimaryColumn } from 'typeorm';
import { EntityBase } from './entity.base';

@Entity('facilities')
export class Facility extends EntityBase {
  @PrimaryColumn('int')
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  spId: string;

  @Column()
  patients: number;

  @PrimaryColumn('int')
  userId: number;

  @Column()
  userName: string;
}
