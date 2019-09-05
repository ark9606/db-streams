import { Entity, Column, PrimaryColumn } from 'typeorm';
import { EntityBase } from './entity.base';

@Entity('goals')
export class Goals extends EntityBase {
  @PrimaryColumn()
  userId: number;

  @Column()
  isNew: boolean;

  @Column()
  calculatedAt: Date;

  @Column({
    type: 'nvarchar',
    length: 'max',
  })
  generalGoalsJson: string;

  @Column({
    type: 'nvarchar',
    length: 'max',
  })
  goalsPerFacilitesJson: string;
}
