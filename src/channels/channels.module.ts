import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {ChannelsEntity} from "./channels.entity";
import {ChannelsController} from "./channels.controller";
import {ChannelsService} from "./channels.service";


@Module({
    imports: [TypeOrmModule.forFeature([ChannelsEntity])],
    providers: [ChannelsService],
    controllers: [
        ChannelsController
    ],
    exports: [ChannelsService]
})
export class ChannelsModule { }