import { HTTPSource } from "../data/source/http.data.source";
import { createContainer, InjectionMode, asClass } from "awilix";

// Create dependency injection container
export const container = createContainer({
  injectionMode: InjectionMode.PROXY,
});

// Register dependencies
export const registerDependencies = () => {
  container.register({
    HTTPSource: asClass(HTTPSource),
  });

  console.log(`Dependencies: Registered`.blue.underline.bold);
};
