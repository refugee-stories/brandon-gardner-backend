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
  .route("/stories/approve")
  //POST FOR APPROVE
  .post(async ({ body: { title, story, highlight } }, res) => {
    if (title && story && highlight) {
      try {
        const id = await actions.approveStory({ title, story, highlight });
        res.status(200).json({ newStoryID: id });
      } catch (error) {
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
  .route("/stories/reject")
  //DELETE FOR REJECT
  .delete(async ({ body: { id } }, res) => {
    if (id) {
      try {
        await actions.rejectStory(id);
        res.status(200).end();
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
  .route("/stories/delete")
  //DELETE FOR REMOVAL
  .delete(async ({ body: { id } }, res) => {
    if (id) {
      try {
        await actions.deleteStory(id);
        res.status(200).end();
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
