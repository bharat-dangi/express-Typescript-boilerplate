import { NextFunction, Request, Response } from "express";
import { container } from "../config/dependency";
import { ExampleService } from "../service/example.service";
import { ErrorResponse } from "../types/errorResponse.type";
import { buildResponse } from "../utils/response.utils";

class ExampleController {
  static async testExample(req: Request, res: Response, next: NextFunction) {
    try {
      const exampleService: ExampleService = container.resolve(
        "ExampleService"
      ) as ExampleService;

      const { data, error } = await exampleService.testExample();

      if (error !== null) {
        return next(new ErrorResponse(error, 400));
      }

      return res.status(200).json(buildResponse(true, data, null));
    } catch (error) {
      console.error(error);
      next(new ErrorResponse(error, 500));
    }
  }
}

export { ExampleController };
