const { logEvents } = require("./logger");

const errHandler = (err, req, res, next) => {
  logEvents(
    `${err.name}\t${err.message}\t${req.method}\t${req.url}\t${req.header.origin}`, 'errLog.log'
  );
  const errStatus = err.status || 500;
  const errMessage = err.message || "Something went wrong";

  res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMessage,
  });

  console.log(err.stack);
  next();
};

module.exports = errHandler;
