import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, Index, OneToMany, ManyToOne } from 'typeorm'

@Entity()
export class Image extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column('text')
  word: string

  @Column('text')
  imageUrl: string

}


