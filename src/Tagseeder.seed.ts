// import {Factory, Seeder} from 'typeorm-seeding'
// import { Connection } from 'typeorm'
// import {TagEntity} from "./tag/tagEntity";
//
// export default class CreateTagsEntity implements Seeder {
//     public async run(factory: Factory, connection: Connection): Promise<any> {
//         await connection
//             .createQueryBuilder()
//             .insert()
//             .into(TagEntity)
//             .values([{tag:"hehe"}])
//             .execute();
//     }
//
// }