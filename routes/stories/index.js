const router = require("express").Router();

const actions = require("./storyModel");

router
  .route("/")
  //GET TO /
  .get(async (req, res) => {
    try {
      const stories = await actions.getAllStories();
      res.status(200).json(stories);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error while retrieving stories.", error });
    }
  })
  //POST TO /
  .post(async ({ body: { story, title } }, res) => {
    if (story && title) {
      try {
        const [id] = await actions.addStory({ story, title });
        res.status(201).json({ id });
      } catch (error) {
        res.status(500).json({
          message: "Something went wrong submitting the story.",
          error
        });
      }
    } else {
      res
        .status(400)
        .json({ message: "Please provide a title and story to submit." });
    }
  });

router
  .route("/latest")
  //GET TO /LATEST
  .get(async (req, res) => {
    try {
      const stories = await actions.getLatestStories();
      res.status(200).json(stories);
    } catch (error) {
      res.status(500).json({
        message: "Something went wrong retrieving the latest stories.",
        error
      });
    }
  });

module.exports = router;
