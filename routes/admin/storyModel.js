const db = require("../../data/config");

module.exports = {
  approveStory,
  deleteStory,
  getPendingStories,
  rejectStory
};

function approveStory(id, story) {
  return new Promise(async (resolve, reject) => {
    try {
      const exists = await db("pending_stories")
        .where({ id })
        .first();
      if (!exists) {
        resolve(false);
      }
      const [newId] = await db("stories").insert(story);
      const count = await db("pending_stories")
        .where({ id })
        .del();
      if (count) {
        resolve(newId);
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
