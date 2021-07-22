module.exports = {
  type: `${process.env.TYPEORM_CONNECTION}`,
  host: `${process.env.TYPEORM_HOST}`,
  username: `${process.env.TYPEORM_USERNAME}`,
  password: `${process.env.TYPEORM_PASSWORD}`,
  database: process.env.TYPEORM_DATABASE,
  port: parseInt(process.env.TYPEORM_PORT),
  logging: process.env.TYPEORM_LOGGING,
  migrationsRun: process.env.TYPEORM_MIGRATIONS_RUN,
  synchronize: process.env.TYPEORM_SYNCHRONIZE,
  "entities": [
    "src/**/*.entity{.ts,.js}",
  ],
  "migrations": [
    "src/migrations/**/*.ts"
  ],
  "subscribers": [
    "src/subscriber/**/*.ts"
  ],
  "cli": {
    "entitiesDir": "src/entities",
    "migrationsDir": "src/migrations",
    "subscribersDir": "src/subscribers"
  }
}
