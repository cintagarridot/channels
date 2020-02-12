import {Get, Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {UserEntity} from "./user.entity";
import {DeleteResult, Repository} from "typeorm";
import {TagEntity} from "../tag/tagEntity";
import {PhotoEntity} from "../photo/photo.entity";
import {CommentEntity} from "../comment/comment.entity";
import {FindOneOptions} from "typeorm/find-options/FindOneOptions";

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ) {}


    async findAll(): Promise<UserEntity[]> {
        return await this.userRepository.find();
    }

    async findById(id: string, options?: FindOneOptions): Promise<UserEntity> {
        return await this.userRepository.findOne(id, options);
    }

    async createUser(username: string, email: string, tags: TagEntity[], photo: PhotoEntity, comments: CommentEntity[]): Promise<UserEntity>{

        let newUser = new UserEntity();

        newUser.username = username;
        newUser.email = email;
        newUser.tag = tags;
        newUser.photo = photo;
        newUser.comments = comments;

        const savedUser = await this.userRepository.save(newUser);
        return savedUser;

    }

    async delete(idUser: string): Promise<DeleteResult>{

        return this.userRepository.delete(idUser);

    }

    async update(id: string, newUsername: string, newEmail: string, tags: TagEntity[], photo: PhotoEntity): Promise<UserEntity> {

        let toUpdate = await this.userRepository.findOne(id);

        delete toUpdate.username;
        delete toUpdate.email;
        delete toUpdate.tag;
        delete toUpdate.photo;

        toUpdate.username = newUsername;
        toUpdate.email = newEmail;
        toUpdate.tag = tags;
        toUpdate.photo = photo;

        return await this.userRepository.save(toUpdate);

    }



}
