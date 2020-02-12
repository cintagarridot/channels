import { Controller, Get, Req, Put, Body, Post, Delete, Param, HttpException } from '@nestjs/common';

import { TagService } from './tag.service';
import { TagEntity } from './tagEntity';
import { Crud } from '@nestjsx/crud';


@Crud({
	model: {
		type: TagEntity
    },
    params: {
	    _id: {
	        field: 'id',
            type: 'uuid',
            primary: true
        }
    }

})

@Controller('tags')
export class TagController {

    constructor(private readonly tagService: TagService) {}

    @Get()
    async findAll(): Promise<TagEntity[]> {
        return await this.tagService.findAll();
    }

    @Get('/:id')
    async findById(@Param() params): Promise<TagEntity>{
      const tag = await this.tagService.findById(params.id);
      if (!tag) {
        throw new HttpException('Cannot find the requested tag', 404);
      }
       return tag;
    }

    @Post('post')
    async create(@Body('tag') t: string): Promise<TagEntity>{
      return await this.tagService.create(t);
    }

    @Delete()
    async delete(@Body('id') idTag: string){
      return await this.tagService.delete(idTag);
    }

    @Put()
    async update(@Body('id') idTag: string, @Body('newT') newT: string): Promise<TagEntity> {

      console.log(newT);
      return await this.tagService.update(idTag, newT);
      
    }


}
