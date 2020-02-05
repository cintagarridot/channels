import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';


import { AppController } from './app.controller';
import { AppService } from './app.service';
import { tagModule } from './tag/tag.module';
import { TagEntity } from './tag/tag.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'changeme',
      database: 'postgres',
      entities: [ TagEntity ],
      synchronize: true
    }),
    tagModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection){}
}
