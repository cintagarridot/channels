import { Controller, Get, Req, Put, Body, Post, Delete, Param } from '@nestjs/common';

import { tagService } from './tag.service';
import { TagEntity } from './tag.entity';
import { Crud } from '@nestjsx/crud';

@Crud({
	model: {
		type: TagEntity
  }

})

@Controller('tags')
export class TagController {

    constructor(private readonly tagService: tagService) {}

    @Get()
    async findAll(): Promise<TagEntity[]> {
        return await this.tagService.findAll();
    }

    @Get('/:id')
    async findById(@Param() params): Promise<TagEntity>{

       return await this.tagService.findById(params.id);
    }

    @Post()
    async create(@Body('id') idTag: string, @Body('tag') t: string): Promise<TagEntity>{
      return await this.tagService.create(idTag, t);
    }

    @Delete()
    async delete(@Body('id') idTag: string){
      return await this.tagService.delete(idTag);
    }

    @Put()
    async update(@Body('id') idTag: string, @Body('newId') newId: string, @Body('newTag') newT: string): Promise<TagEntity> {

      var newTag = new TagEntity();
      newTag.id = newId;
      newTag.tag = newT;

      return await this.tagService.update(idTag, newTag);
    }


}
