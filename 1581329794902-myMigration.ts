import {MigrationInterface, QueryRunner} from "typeorm";

export class myMigration1581329794902 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "tags" RENAME COLUMN "tag" TO "name"`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "tags" RENAME COLUMN "name" TO "tag"`); // reverts things made in "up" method
    }

}
