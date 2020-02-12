import { Controller, Get, Put, Body, Post, Delete, Param, HttpException } from '@nestjs/common';


import { CommentEntity } from './comment.entity';
import { Crud } from '@nestjsx/crud';
import {CommentService} from "./comment.service";
import {UserEntity} from "../user/user.entity";


@Crud({
    model: {
        type: CommentEntity
    },
    params: {
        _id: {
            field: 'id',
            type: 'uuid',
            primary: true
        }
    }

})

@Controller('comment')
export class CommentController {

    constructor(private readonly commentService: CommentService) {}

    @Get()
    async findAll(): Promise<CommentEntity[]> {
        return await this.commentService.findAll();
    }

    @Post()
    async postCommentToUser(@Body('comment')comment: string): Promise<CommentEntity>{
        return await this.commentService.postCommentToUser(comment);
    }

}