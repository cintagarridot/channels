import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Repository, getRepository, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { CommentEntity } from './comment.entity';



@Injectable()
export class CommentService extends TypeOrmCrudService<CommentEntity> {


    constructor(
        @InjectRepository(CommentEntity)
        private readonly commentRepository: Repository<CommentEntity>
    ) {
        super(commentRepository);
    }


    async findAll(): Promise<CommentEntity[]> {
        return await this.commentRepository.find();
    }

    async postCommentToUser(comment: string): Promise<CommentEntity> {

        let commentNew = new CommentEntity();
        commentNew.comment = comment;

        const savedComment = await this.commentRepository.save(commentNew);
        return savedComment;

    }

}