import {Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity('channels')
export class ChannelsEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    channel: string;


}