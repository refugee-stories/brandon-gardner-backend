exports.seed = function(knex, Promise) {
  return knex("pending_stories").insert([
    { story: "pending1", title: "test1" },
    { story: "pending2", title: "test2" },
    { story: "pending3", title: "test3" }
  ]);
};
