import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { EntityBase } from './entity.base';

@Entity('visits')
export class Visit extends EntityBase {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  facilityId: number;

  @Column()
  userId: number;

  @Column({ nullable: true })
  enterDate?: Date;

  @Column({ nullable: true })
  exitDate?: Date;

  @Column()
  deviceId: string;
}
