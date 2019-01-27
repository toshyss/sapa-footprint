const knex = require("knex");

const dbminfo = {
  // database connection configs
  // (os:windows) needs to set option -U username
    client: "postgres",
    connection: {
      host: "127.0.0.1",
      database: "sapa",
    },
    port: 5432,
}
const dbconn = knex(dbminfo);
module.exports = dbconn;
