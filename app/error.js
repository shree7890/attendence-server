const createError = require("http-errors");

// notFound handler 404

const notFounHandler = (_req, _res, next) => {
  next(createError(404, "Not found Page!"));
};

// error handler
const errorHandler = (err, _req, res, _next) => {
  const message = err.message ? err.message : "Server Error Occurred";
  const status = err.status ? err.status : 500;
  res.status(status).json({
    message,
  });
};

module.exports = {
  notFounHandler,
  errorHandler,
};
