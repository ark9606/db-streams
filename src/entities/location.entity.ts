import { Entity, Column, PrimaryColumn } from 'typeorm';
import { EntityBase } from './entity.base';

@Entity('locations')
export class Location extends EntityBase {
  @PrimaryColumn('int')
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true, type: 'float' })
  lat: number;

  @Column({ nullable: true, type: 'float' })
  lng: number;

  @PrimaryColumn('int')
  userId: number;

  @Column()
  userName: string;
}
