import { Controller, Get, Put, Body, Post, Delete, Param, HttpException } from '@nestjs/common';


import { PhotoEntity } from './photo.entity';
import { Crud } from '@nestjsx/crud';
import {PhotoService} from "./photo.service";
import {UserEntity} from "../user/user.entity";


@Crud({
    model: {
        type: PhotoEntity
    },
    params: {
        _id: {
            field: 'id',
            type: 'uuid',
            primary: true
        }
    }

})

@Controller('photo')
export class PhotoController {

    constructor(private readonly photoService: PhotoService) {}

    @Get()
    async findAll(): Promise<PhotoEntity[]> {
        return await this.photoService.findAll();
    }

    @Post()
    async postPhotoToUser(@Body('photo')photo: string): Promise<PhotoEntity>{
        return await this.photoService.postPhotoToUser(photo);
    }

}