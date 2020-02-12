import {MigrationInterface, QueryRunner} from "typeorm";

export class createChannel1581503799500 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "channels" RENAME "channel" to "name"`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "channels" RENAME "name" to "channel"`);
    }

}
