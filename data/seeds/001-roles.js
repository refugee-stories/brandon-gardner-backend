exports.seed = function(knex, Promise) {
  return knex("roles").insert([{ role: "admin" }]);
};
