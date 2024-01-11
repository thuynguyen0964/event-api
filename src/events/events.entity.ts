import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { Attendee } from './attendee.entity'

export enum AttendeeAnwsers {
  Agreed = 'agree',
  Refused = 'refused',
  Pending = 'pending'
}

@Entity()
export class Events {
  @PrimaryGeneratedColumn()
  id?: number

  @Column('varchar')
  name: string

  @Column('varchar')
  description: string

  @Column('varchar')
  addr: string

  @Column('date')
  when: Date

  @OneToMany(() => Attendee, (invite) => invite.event, { cascade: true })
  invitee: Attendee[]

  inviteeCount?: number

  @Column({
    type: 'enum',
    enum: AttendeeAnwsers,
    default: AttendeeAnwsers.Pending
  })
  answers: AttendeeAnwsers

  inviteeAgree?: number
  inviteeRefuse?: number
  inviteePending?: number

  @CreateDateColumn()
  createdAt?: Date

  @UpdateDateColumn()
  updatedAt?: Date
}
