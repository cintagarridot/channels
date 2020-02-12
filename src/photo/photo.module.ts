import {Module} from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm/";
import {PhotoEntity} from "./photo.entity";
import {PhotoController} from "./photo.controller";
import {PhotoService} from "./photo.service";


@Module({
    imports: [TypeOrmModule.forFeature([PhotoEntity])],
    providers: [PhotoService],
    controllers: [
        PhotoController
    ],
    exports: [PhotoService]
})

export class PhotoModule  {}