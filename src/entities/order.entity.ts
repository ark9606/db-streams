import { Entity, Column, PrimaryColumn } from 'typeorm';
import { EntityBase } from './entity.base';

@Entity('orders')
export class Order extends EntityBase {
  @PrimaryColumn('int')
  facilityId: number;

  @Column({ nullable: true })
  lastDate?: Date;

  @Column()
  dueDate: Date;

  @Column()
  userId: number;

  @Column()
  facilityName: string;

  @PrimaryColumn()
  assesmentDate: Date;

  @Column()
  completed: boolean;

  @Column({ nullable: true })
  previousDate?: Date;
}
