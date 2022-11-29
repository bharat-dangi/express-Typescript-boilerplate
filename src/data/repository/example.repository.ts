import { IPromiseResponse } from "../../types/promiseResponse.type";
import { ExampleSourceBase } from "../source/example.data.source";

export class ExampleRepository {
  exampleSource: ExampleSourceBase;

  constructor(opts: any) {
    this.exampleSource = opts.ExampleSource as ExampleSourceBase;
  }

  async testExample(): Promise<IPromiseResponse<any, Error>> {
    return new Promise(async (resolve) => {
      try {
        const { data, error } = await this.exampleSource.testExample();
        if (error) {
          return resolve({
            data: null,
            error: error,
          });
        }
        return resolve({
          data,
          error: null,
        });
      } catch (error) {
        console.error(error);
        return resolve({
          data: null,
          error: error as Error,
        });
      }
    });
  }
}
