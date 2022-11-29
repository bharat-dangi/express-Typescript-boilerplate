import { IPromiseResponse } from "../../types/promiseResponse.type";

export abstract class ExampleSourceBase {
  abstract testExample(): Promise<IPromiseResponse<any, Error>>;
}

export class ExampleSource implements ExampleSourceBase {
  async testExample(): Promise<IPromiseResponse<any, Error>> {
    return new Promise<IPromiseResponse<any, Error>>(async (resolve) => {
      try {
        return resolve({
          data: "Test Example Called",
          error: null,
        });
      } catch (e) {
        console.error(e);
        return resolve({
          data: null,
          error: e as Error,
        });
      }
    });
  }
}
