// Update with your config settings.

module.exports = {
  client: "pg",
  connection: {
    host: "127.0.0.1",
    database: "sapa",
  },
  seeds: {
    directory: "./seeds",
  },
  port: 5432,
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    directory: "./migrations",
    tableName: "knex_migrations",
  },
};
