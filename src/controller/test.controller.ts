import { NextFunction, Request, Response } from "express";
import { container } from "../config/dependency";
import { buildResponse } from "../utils/response.utils";

class TestController {
  static async test(req: Request, res: Response, next: NextFunction) {
    return res.status(200).json(buildResponse(true, "Test"));
  }
}

export { TestController };
