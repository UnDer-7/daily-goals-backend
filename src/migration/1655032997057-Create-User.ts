import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUser1555032997057 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(new Table({
      name: 'USER',
      columns: [
        {
          name: 'id',
          type: 'int',
          isNullable: false,
          isPrimary: true,
          isUnique: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'name',
          type: 'varchar',
          length: '100',
          isNullable: false,
        },
        {
          name: 'email',
          type: 'varchar',
          length: '100',
          isNullable: false,
          isUnique: true,
        },
        {
          name: 'password',
          type: 'varchar',
          length: '100',
          isNullable: true,
        }
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('USER')
  }
}
