import Joi from "joi";
import { ErrorResponse } from "../types/errorResponse.type";
import { NextFunction, Request, Response } from "express";

export const validationHandler = (schema: Joi.ObjectSchema<any>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    const valid = error == null;

    if (valid) {
      next();
    } else {
      const { details } = error;
      const message = details.map((i) => i.message).join(",");

      next(new ErrorResponse(message, 400));
    }
  };
};
