exports.up = function(knex, Promise) {
  return knex.schema
    .createTable("accounts", t => {
      t.increments();
      t.integer("role_id")
        .unsigned()
        .references("roles.id")
        .defaultTo(1)
        .notNullable()
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      t.string("email")
        .notNullable()
        .unique();
      t.string("password").notNullable();
    })
    .createTable("roles", t => {
      t.increments();
      t.string("role");
    })
    .createTable("pending_stories", t => {
      t.increments();
      t.string("title");
      t.text("story");
      t.string("source");
    })
    .createTable("stories", t => {
      t.increments();
      t.string("title");
      t.string("highlight");
      t.text("story");
      t.string("source");
    });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists("roles")
    .dropTableIfExists("accounts")
    .dropTableIfExists("pending_stories")
    .dropTableIfExists("stories");
};
