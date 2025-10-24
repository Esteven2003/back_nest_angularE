import { MigrationInterface, QueryRunner } from "typeorm";

export class TableUser1761311582194 implements MigrationInterface {
    name = 'TableUser1761311582194'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "direccion" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "direccion"`);
    }

}
