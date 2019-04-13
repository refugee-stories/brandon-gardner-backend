const db = require("../../data/config");

module.exports = {
  addStory,
  getAllStories,
  getLatestStories
};

function addStory(story) {
  return db("pending_stories").insert(story);
}

function getAllStories() {
  return db("stories").orderBy("id", "desc");
}

function getLatestStories() {
  return db("stories")
    .limit(3)
    .orderBy("id", "desc");
}
