import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Repository, getRepository, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { TagEntity } from './tag.entity';

import { validate } from 'class-validator';

@Injectable()
export class tagService extends TypeOrmCrudService<TagEntity> {
   
    
  constructor(
    @InjectRepository(TagEntity)
    private readonly tagRepository: Repository<TagEntity>
  ) {
    super(tagRepository);
  }


  async findAll(): Promise<TagEntity[]> {
    return await this.tagRepository.find();
  }

  async create(id: string, t: string): Promise<TagEntity> {

 
    let newTag = new TagEntity();
    newTag.id = id;
    newTag.tag = t;

    
    const savedUser = await this.tagRepository.save(newTag);
    //console.log(savedUser);
    return savedUser;
  }

  async delete(id: string): Promise<DeleteResult>{

    return this.tagRepository.delete({id});


  }  

   async findById(id: string): Promise<TagEntity> {
    const t = await this.tagRepository.findOne(id);

        if (!t) {
            const errors = { tag: ' not found ' };
            throw new HttpException({ errors }, 401);
        };

        return t;
    }


    async update(id: string, Tagg:TagEntity): Promise<TagEntity> {

      let toUpdate = await this.tagRepository.findOne(id);
      delete toUpdate.id;
      delete toUpdate.tag;

      let updated = Object.assign(toUpdate, Tagg);
      return await this.tagRepository.save(updated);


    }


    

}