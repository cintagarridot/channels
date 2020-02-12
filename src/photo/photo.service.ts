import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Repository, getRepository, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { PhotoEntity } from './photo.entity';
import {UserEntity} from "../user/user.entity";


@Injectable()
export class PhotoService extends TypeOrmCrudService<PhotoEntity> {


    constructor(
        @InjectRepository(PhotoEntity)
        private readonly photoRepository: Repository<PhotoEntity>
    ) {
        super(photoRepository);
    }


    async findAll(): Promise<PhotoEntity[]> {
        return await this.photoRepository.find();
    }

    async postPhotoToUser(photo: string): Promise<PhotoEntity>{

        let photoNew = new PhotoEntity();
        photoNew.photo = photo;


        const savedPhoto = await this.photoRepository.save(photoNew);
        return savedPhoto;
    }

}