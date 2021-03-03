const moment = require("moment");

const logger = (req, res, next) => {
  //next parameter always has to come last in order to call the next middleware function
  console.log(
    `${req.protocol}://${req.get("host")}${
      req.originalUrl
    }: ${moment().format()}`
  ); //this writes the URL and the Timestamp to the console
  next();
};

module.exports = logger;
