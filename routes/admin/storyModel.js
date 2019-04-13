const db = require("../../data/config");

module.exports = {
  approveStory,
  deleteStory,
  getPendingStories,
  rejectStory
};

function approveStory(story) {
  return new Promise(async (resolve, reject) => {
    try {
      const [id] = await db("stories").insert("story");
      const count = await db("pending_stories")
        .where({ id: story.id })
        .del();
      if (count) {
        resolve(id);
      } else {
        reject(
          Error("Something went wrong deleting the story from pending_stories.")
        );
      }
    } catch (error) {
      reject(error);
    }
  });
}

function deleteStory(id) {
  return db("stories")
    .where({ id })
    .del();
}

function getPendingStories() {
  return db("pending_stories").orderBy("id", "desc");
}

function rejectStory(id) {
  return db("pending_stories")
    .where({ id })
    .del();
}
