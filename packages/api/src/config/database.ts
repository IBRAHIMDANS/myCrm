import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  type: `${process.env.TYPEORM_CONNECTION}`,
  host: `${process.env.TYPEORM_HOST}`,
  username: `${process.env.TYPEORM_USERNAME}`,
  password: `${process.env.TYPEORM_PASSWORD}`,
  database: process.env.TYPEORM_DATABASE,
  port: parseInt(process.env.TYPEORM_PORT),
  logging: process.env.TYPEORM_LOGGING,
  migrationsRun: process.env.TYPEORM_MIGRATIONS_RUN,
  synchronize: process.env.TYPEORM_SYNCHRONIZE,
  entities: ['src/**/*.entity{.ts,.js}'],
}));
