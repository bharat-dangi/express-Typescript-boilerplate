import { NextFunction, Request, Response } from "express";
import { ErrorResponse } from "../types/errorResponse.type";

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const x_api_key = req.headers["x-api-key"];
  if (process.env.X_API_KEY && x_api_key === process.env.X_API_KEY) {
    next();
    return;
  } else {
    unauthorized(next);
    return;
  }
};

const unauthorized = (next: NextFunction) => {
  next(new ErrorResponse("Unauthorized", 401));
};
