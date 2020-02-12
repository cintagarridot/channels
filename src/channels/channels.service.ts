import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Repository, getRepository, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import {ChannelsEntity} from "./channels.entity";
// import {CreateChannelDto} from "./dto/create-channel.dto";
import {validate} from "class-validator";
// import {ChannelRO} from "./channels.interface";



@Injectable()
export class ChannelsService extends TypeOrmCrudService<ChannelsEntity> {


    constructor(
        @InjectRepository(ChannelsEntity)
        private readonly channelRepository: Repository<ChannelsEntity>
    ) {
        super(channelRepository);
    }


    async findAll(): Promise<ChannelsEntity[]> {
        return await this.channelRepository.find();
    }

    async findById(id: string): Promise<ChannelsEntity> {
        return await this.channelRepository.findOne(id);
    }

    async create(c: string /*CreateChannelDto*/): Promise<ChannelsEntity> {

        let newChannel = new ChannelsEntity();

        newChannel.channel = c;

        const savedChannel = await this.channelRepository.save(newChannel);
        return savedChannel;

    }

    async delete(idChannel: string): Promise<DeleteResult>{

        return this.channelRepository.delete(idChannel);

    }

    async update(id: string, newChannelname: string): Promise<ChannelsEntity> {

        let toUpdate = await this.channelRepository.findOne(id);

        delete toUpdate.channel;

        toUpdate.channel = newChannelname;

        return await this.channelRepository.save(toUpdate);

    }

}