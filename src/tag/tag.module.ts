import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TagEntity } from './tag.entity';
import { tagService } from './tag.service';
import { TagController } from './tag.controller';

@Module({
    imports: [TypeOrmModule.forFeature([TagEntity])],
    providers: [tagService],
    controllers: [
        TagController
    ],
    exports: []
})
export class tagModule {

    /*public configure(consumer: MiddlewareConsumer){
        consumer
            .apply(TagMiddleware)
            .forRoutes({path: 'tags/getAll', method: RequestMethod.GET}, 
                      {path: 'tags/:id/:tag', method: RequestMethod.POST}
            
            );
    }*/
}