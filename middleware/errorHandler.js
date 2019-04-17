
function errorHandler(error, req, res, next) {
  switch (error) {
    case 400:
      res.status(400).json({
        statusCode: error,
        message: "Required fields cannot be blank."
      });
      break;
    case 404:
      res
        .status(404)
        .json({ statusCode: error, message: "This data does not exist." });
      break;
    case 401:
      res.status(401).json({
        statusCode: error,
        message: "Incorrect credentials. Please try again."
      });
      break;
    case 403:
      res.status(403).json({
        statusCode: error,
        message: "You are not authorized to view this content."
      });
      break;
    default:
      console.log(error);
      res.json({ message: error.message });
  }
  next();
}

module.exports = errorHandler;
