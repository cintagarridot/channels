import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';


import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ChannelsController } from './channels/channels.controller';
import {ChannelsEntity} from "./channels/channels.entity";
import {ChannelsModule} from "./channels/channels.module";


@Module({
  imports: [
    TypeOrmModule.forRoot({ //la función forRoot busca el fichero de configuración ormconfig.json en la raiz del proyecto.
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'changeme',
      database: 'postgres',
      entities: [ ChannelsEntity ],
      // seeds: ["src/**/*.seed.ts"],
      // factories: ["src/**/*.factory.ts"],
      synchronize: false, // -> lo desactivamos porque vamos a crear migraciones
      // // /* MIGRATION !!! */
      // //migrationsTableName: "custom_migration_table", // --> solo se especifica si queremos que el nombre de la tabla de migración sea diferente de "migrations"
      migrations: ["migration/*.ts"], //Indica que typeOrm debe cargar las migraciones desde el directorio "migracion" dado.
      cli: {
        migrationsDir: "src/migration" //indica que la CLI debe crear nuevas migraciones en el directorio "migration"
      }


    }),
    ChannelsModule

  ],
  controllers: [ AppController, ChannelsController ],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection){}
}
