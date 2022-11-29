import "colors";
import { ErrorRequestHandler, NextFunction, Response, Request } from "express";

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  const { message, statusCode } = err;

  const error = {
    statusCode: statusCode,
    message: message,
  };

  console.error("Error: ".red, error);

  res.status(error.statusCode || 500).json({
    success: false,
    data: null,
    message: error.message || "Internal Server Error",
  });
};

const error404Handler = (req: Request, res: Response, next: NextFunction) => {
  res.status(404);
  res.send({ success: false, data: null, message: "Not found" });
};

export { errorHandler, error404Handler };
