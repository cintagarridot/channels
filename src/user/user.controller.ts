import {
    Body,
    ClassSerializerInterceptor,
    Controller,
    Delete,
    Get,
    HttpException,
    Param,
    Post,
    Put,
    UseInterceptors
} from '@nestjs/common';
import {UserService} from "./user.service";
import {UserEntity} from "./user.entity";

import { Crud } from '@nestjsx/crud';
import {TagEntity} from "../tag/tagEntity";
import {PhotoEntity} from "../photo/photo.entity";
import {CommentEntity} from "../comment/comment.entity";


@Crud({
    model: {
        type: UserEntity
    },
    params: {
        _id: {
            field: 'id',
            type: 'uuid',
            primary: true
        }
    }
    /*options: {
        tags: {
            allow: [];
        }
    }*/

})


@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {}


    @Get()
    async findAll(): Promise<UserEntity[]>{
        return await this.userService.findAll();
    }

    @Get('/:id')
    async findById(@Param() params): Promise<UserEntity>{
        const user = await this.userService.findById(params.id);
        if (!user) {
            throw new HttpException('Cannot find the requested tag', 404);
        }
        return user;
    }

    @Get('/:id/tags')
    async findTagsByUserId(@Param() params): Promise<any> {
        // const user = await this.userService.findById(params.id, {relations: ['tag', 'comments', 'photo']});
        const user = await this.userService.findById(params.id, {loadEagerRelations: true});
        if (!user) {
            throw new HttpException('Cannot find the requested tag', 404);
        }
        return user.tag;
        // return [user.tag, user.comments, user.photo, user.email];
    }

    @Post()
    async createUser(@Body('username') username: string, @Body('email') email: string, @Body('tags') tags: TagEntity[], @Body('photo')photo: PhotoEntity, @Body('comments') comments: CommentEntity[]){
        return this.userService.createUser(username, email, tags, photo, comments);
    }

    @Delete()
    async delete(@Body('id') idUser: string){
        return await this.userService.delete(idUser);
    }

    @Put()
    async update(@Body('id') idUser: string, @Body('newUsername') newUsername: string, @Body('newEmail') newEmail: string, @Body('tags') tags: TagEntity[], @Body('photo') photo: PhotoEntity): Promise<UserEntity> {

        return await this.userService.update(idUser, newUsername, newEmail, tags, photo);

    }


}
