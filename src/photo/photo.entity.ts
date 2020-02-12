import {Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne} from "typeorm";
import {UserEntity} from "../user/user.entity";

@Entity('photo')
export class PhotoEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    photo: string;

    @OneToOne(type => UserEntity)
    user: UserEntity

}