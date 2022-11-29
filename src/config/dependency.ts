import { HTTPSource } from "../data/source/http.data.source";
import { createContainer, InjectionMode, asClass } from "awilix";
import { ExampleSource } from "../data/source/example.data.source";
import { ExampleRepository } from "../data/repository/example.repository";
import { ExampleService } from "../service/example.service";

// Create dependency injection container
export const container = createContainer({
  injectionMode: InjectionMode.PROXY,
});

// Register dependencies
export const registerDependencies = () => {
  container.register({
    HTTPSource: asClass(HTTPSource),
    ExampleSource: asClass(ExampleSource),
    ExampleRepository: asClass(ExampleRepository),
    ExampleService: asClass(ExampleService),
  });

  console.log(`Dependencies: Registered`.blue.underline.bold);
};
