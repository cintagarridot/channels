import {MigrationInterface, QueryRunner} from "typeorm";

export class Usermigration1581322529645 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "user" RENAME "id" to "idUser"`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "user" RENAME "idUser" to "id"`);
    }

}
