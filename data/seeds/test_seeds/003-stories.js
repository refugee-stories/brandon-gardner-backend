exports.seed = function(knex, Promise) {
  return knex("stories").insert([
    { story: "story1", title: "test1", highlight: "highlight1" },
    { story: "story2", title: "test2", highlight: "highlight2" },
    { story: "story3", title: "test3", highlight: "highlight3" },
    { story: "story34", title: "test4", highlight: "highlight4" }
  ]);
};
