import { MigrationInterface, QueryRunner } from 'typeorm';

export class alterNameColumnAddress1621273452088 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn('users_details', 'adress', 'address');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn('users_details', 'address', 'adress');
  }
}
