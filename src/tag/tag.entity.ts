import {Entity, PrimaryGeneratedColumn, Column, BeforeInsert} from "typeorm";

@Entity('tags')
export class TagEntity {

  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  tag: string;

}