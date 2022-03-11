import { registerAs } from '@nestjs/config'

export default registerAs('database', () => ({
  type: process.env.DATABASE_TYPE,
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  charset: process.env.DATABASE_CHARSER,
  multipleStatements: true,
  entities: ['dist/**/*.entity{.ts,.js}'],
  dropSchema: false,
  synchronize: true,
  // dateStrings: true,
  logging: true,
  logger: process.env.DATABASE_LOGGER
}))
