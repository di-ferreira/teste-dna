import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateTableUserDetails1620996933046 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users_details',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            generationStrategy: 'increment',
          },
          {
            name: 'birthdate',
            type: 'date',
            isNullable: true,
            default: null,
          },
          {
            name: 'phone',
            type: 'varchar',
          },
          {
            name: 'website',
            type: 'varchar',
            isNullable: true,
            default: null,
          },
          {
            name: 'adress',
            type: 'text',
          },
          {
            name: 'status',
            type: 'varchar',
          },
          {
            name: 'avatar',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'userId',
            type: 'int',
            isNullable: false,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users_details');
  }
}
