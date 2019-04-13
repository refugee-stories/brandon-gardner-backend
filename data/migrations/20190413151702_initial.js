exports.up = function(knex, Promise) {
  return knex.schema
    .createTable("roles", t => {
      t.increments();
      t.string("role");
    })
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
    .createTable("pending_stories", t => {
      t.increments();
      t.string("title");
      t.text("story");
    })
    .createTable("stories", t => {
      t.increments();
      t.string("title");
      t.string("highlight");
      t.text("story");
    });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists("roles")
    .dropTableIfExists("accounts")
    .dropTableIfExists("pending_stories")
    .dropTableIfExists("stories");
};
