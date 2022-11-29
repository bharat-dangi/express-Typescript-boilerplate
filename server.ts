import App from "./app";
import { DEFAULT_CONSTANTS } from "./src/data/constants/defaults/defaults.contants";

require("newrelic");

const port = process.env.PORT ?? DEFAULT_CONSTANTS.DEFAULT_PORT;

const app = new App(Number(port));
app.listen();

process.on("unhandledRejection", (err) => {
  console.error(`Unhandled rejection ${err}`.red);
});
