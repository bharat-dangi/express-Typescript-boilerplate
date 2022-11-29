import { container } from "../config/dependency";
import { ExampleRepository } from "../data/repository/example.repository";

import { IPromiseResponse } from "../types/promiseResponse.type";

export class ExampleService {
  exampleRepository: ExampleRepository;

  constructor() {
    this.exampleRepository = container.resolve(
      "ExampleRepository"
    ) as ExampleRepository;
  }

  testExample = async (): Promise<IPromiseResponse<any, Error>> => {
    try {
      const { data, error } = await this.exampleRepository.testExample();

      if (error) {
        return {
          data: null,
          error: error,
        };
      }
      return { data, error };
    } catch (error) {
      console.error(error);
      return {
        data: null,
        error: error as Error,
      };
    }
  };
}
