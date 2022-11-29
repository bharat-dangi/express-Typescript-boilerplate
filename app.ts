import "colors";
import express, { Express } from "express";
import helmet from "helmet";
import hpp from "hpp";
import cors from "cors";
import {
  error404Handler,
  errorHandler,
} from "./src/middleware/error.middleware";
import { connectMongoDB } from "./src/config/db";
import { registerDependencies } from "./src/config/dependency";
import { AppRouter } from "./src/route/index.route";
const xss = require("xss-clean");
import dotenv from "dotenv";

dotenv.config();

class App {
  public app: Express;
  public port: number;

  constructor(port: number) {
    this.app = express();
    this.port = port;
    this.initializeDatabaseConnection();
    this.initializeMiddleware();
    this.initializeRoutes();
    this.initializeErrorHandling();
  }
  private initializeDatabaseConnection(): void {
    connectMongoDB().then(() => {
      registerDependencies();
    });
  }

  private initializeMiddleware(): void {
    // Set security headers
    this.app.use(helmet());

    // Prevent http param pollution
    this.app.use(hpp());

    // Enable CORS
    this.app.use(cors());

    // Prevent XSS attacks
    this.app.use(xss());

    // body parser
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private initializeRoutes(): void {
    // router
    this.app.use("/api", AppRouter);
  }

  private initializeErrorHandling(): void {
    this.app.use(errorHandler);
    this.app.use(error404Handler);
  }

  public listen(): void {
    this.app.listen(this.port, () => {
      console.log(
        `⚡️[server]: Server is running on PORT:${this.port}`.inverse.green
      );
    });
  }
}

export default App;
