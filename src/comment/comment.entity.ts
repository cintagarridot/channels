import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import {UserEntity} from "../user/user.entity";

@Entity('comment')
export class CommentEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    comment: string;

    @ManyToOne(type => UserEntity, user => user.comments)
    user: UserEntity

}