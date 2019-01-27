exports.up = function(knex, Promise) {
  return knex.schema.createTable("sapa", (t) => {
    t.increments()
      .index();

    t.string("name", 20)
      // .unique()
      .notNullable()
      // .index();

	  t.string("direction", 20)
	    .notNullable();

	  t.string("route", 30)
	    .notNullable();

	  t.string("address", 50)
	    .notNullable();

	  t.string("service_name", 20);

	  t.string("service_type", 15);
  });
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("sapa");
};
