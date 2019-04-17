const router = require("express").Router();

const actions = require("./storyModel");

router
  .route("/")
  //GET TO /
  .get(async (req, res, next) => {
    try {
      const stories = await actions.getAllStories();
      res.status(200).json(stories);
    } catch (error) {
      res;
      next(error);
    }
  })
  //POST TO /
  .post(async ({ body: { story, title, source } }, res, next) => {
    if (story && title) {
      try {
        const id = await actions.addStory({ story, title, source });
        res.status(201).json({ id });
      } catch (error) {
        next(error);
      }
    } else {
      res.status(400).json({
        message: "Please provide a title and story to submit."
      });
    }
  });

router
  .route("/latest")
  //GET TO /LATEST
  .get(async (req, res, next) => {
    try {
      const stories = await actions.getLatestStories();
      res.status(200).json(stories);
    } catch (error) {
      next(error);
    }
  });

module.exports = router;
