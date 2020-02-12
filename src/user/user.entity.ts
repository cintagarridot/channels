import {Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {IsEmail} from "class-validator";
import {TagEntity} from "../tag/tagEntity";
import { Exclude, Expose } from "class-transformer";
import {PhotoEntity} from "../photo/photo.entity";
import {CommentEntity} from "../comment/comment.entity";

@Entity('user')
export class UserEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    username: string;

    @Column()
    @IsEmail()
    email: string;

    @ManyToMany(type => TagEntity, tag => tag.id)
    @JoinTable()
    // @Expose({ name: "UsedTagsByUser"})
    tag: TagEntity[];

    @OneToOne(type => PhotoEntity)
    @JoinColumn()
    photo: PhotoEntity;

    @OneToMany(type => CommentEntity, comment => comment.user)
    comments: CommentEntity[];

}
