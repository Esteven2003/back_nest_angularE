import { MigrationInterface, QueryRunner } from "typeorm";

export class TableCategoria11761314195312 implements MigrationInterface {
    name = 'TableCategoria11761314195312'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "categoria" ("id" SERIAL NOT NULL, "nombre" character varying NOT NULL, "detalle" character varying NOT NULL, CONSTRAINT "PK_f027836b77b84fb4c3a374dc70d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user" ADD "direccion" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "direccion"`);
        await queryRunner.query(`DROP TABLE "categoria"`);
    }

}
