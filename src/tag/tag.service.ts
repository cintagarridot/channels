import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Repository, getRepository, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { TagEntity } from './tagEntity';


@Injectable()
export class TagService extends TypeOrmCrudService<TagEntity> {
   
    
  constructor(
    @InjectRepository(TagEntity)
    private readonly tagRepository: Repository<TagEntity>
  ) {
    super(tagRepository);
  }


  async findAll(): Promise<TagEntity[]> {
    return await this.tagRepository.find();
  }

  async create(t: string): Promise<TagEntity> {

 
    let newTag = new TagEntity();
    
    newTag.tag = t;

    
    const savedUser = await this.tagRepository.save(newTag);
    //console.log(savedUser);
    return savedUser;
  }

  async delete(id: string): Promise<DeleteResult>{

    return this.tagRepository.delete({id});


  }  

   async findById(id: string): Promise<TagEntity> {
    return await this.tagRepository.findOne(id);
  }


    async update(id: string, newT: string): Promise<TagEntity> {

      let toUpdate = await this.tagRepository.findOne(id);

      delete toUpdate.tag;

      toUpdate.tag = newT;

      //let updated = Object.assign(toUpdate, newTag);
      return await this.tagRepository.save(toUpdate);


    }


    

}