import { ConnectionOptions } from 'typeorm';

const entitiesPath = process.env.ENVIRONMENT === 'development' ? 'src/domain/*.ts' : 'dist/domain/*.js';
const subscribersPath = process.env.ENVIRONMENT === 'development' ? 'src/subscriber/*.ts' : 'dist/subscriber/*.js';
const migrationsPath = process.env.ENVIRONMENT === 'development' ? 'src/migration/*.ts' : 'dist/migration/*.js';

console.log('DB - TYPE: ', process.env.DB_TYPE);
// @ts-ignore
export const config: ConnectionOptions = {
  // @ts-ignore
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  logging: true,
  synchronize: false,
  migrationsRun: true,
  entities: [
    entitiesPath,
  ],
  subscribers: [
    subscribersPath,
  ],
  migrations: [
    migrationsPath,
  ],
};
