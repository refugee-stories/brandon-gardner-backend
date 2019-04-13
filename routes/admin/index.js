const router = require("express").Router();

const actions = require("./storyModel");

router
  .route("/stories")
  //GET FOR /STORIES
  .get(async (req, res) => {
    try {
      const stories = await actions.getPendingStories();
      res.status(200).json(stories);
    } catch (error) {
      res.status({
        message: "Something went wrong fetching pending stories.",
        error
      });
    }
  });

router
  .route("/stories/approve/:id")
  //POST FOR APPROVE
  .post(async ({ body: { title, story, highlight }, params: { id } }, res) => {
    if (title && story && highlight) {
      try {
        const newId = await actions.approveStory(id, {
          title,
          story,
          highlight
        });
        res.status(200).json({ newStoryID: newId });
      } catch (error) {
        console.log(error);
        res.status(500).json({
          message: "Something went wrong approving the story.",
          error
        });
      }
    } else {
      res.status(400).json({
        message: "Please provide a title, story, and highlight to add."
      });
    }
  });

router
  .route("/stories/reject/:id")
  //DELETE FOR REJECT
  .delete(async ({ params: { id } }, res) => {
    if (id) {
      try {
        const count = await actions.rejectStory(id);
        if (count) {
          res.status(200).end();
        } else {
          res.status(404).json({ message: "Story could not be located." });
        }
      } catch (error) {
        res.status(500).json({
          message: "Something went wrong rejecting the story.",
          error
        });
      }
    } else {
      res
        .status(400)
        .json({ message: "Please provide an ID of the story to be rejected." });
    }
  });

router
  .route("/stories/delete/:id")
  //DELETE FOR REMOVAL
  .delete(async ({ params: { id } }, res) => {
    if (id) {
      try {
        const count = await actions.deleteStory(id);
        if (count) {
          res.status(200).end();
        } else {
          res.status(404).json({ message: "Story could not be located." });
        }
      } catch (error) {
        res.status(500).json({
          message: "Something went wrong deleting the story.",
          error
        });
      }
    } else {
      res
        .status(400)
        .json({ message: "Please provide an ID of the story to be deleted." });
    }
  });

module.exports = router;
