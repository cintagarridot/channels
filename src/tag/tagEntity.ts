import {Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import {UserEntity} from "../user/user.entity";

@Entity('tags')
export class TagEntity {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  tag: string;

  @ManyToMany(type => UserEntity, user => user.id)
  user: UserEntity[]

}