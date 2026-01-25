import { Config } from "@/config";
import { CustomLogger } from "@fluctux/logger";
import morgan from "morgan";

const logger = new CustomLogger("morgan.middleware").logger;

export const morganRequestLogger = () => {
  return morgan(
    function (tokens, req, res) {
      return [
        tokens.method(req, res),
        tokens.url(req, res),
        tokens.status(req, res),
        tokens.res(req, res, "content-length"),
        tokens["response-time"](req, res),
        "ms",
      ].join("=");
    },
    {
      skip(req, res) {
        return res.statusCode < (Config.nodeEnv === "production" ? 400 : 300);
      },
      stream: {
        write: (message) => {
          const [method, url, status, content_length, response_time] =
            message.split("=");
          const statusNumber = Number(status);
          const logLevel =
            statusNumber >= 300 && statusNumber <= 399 ? "warn" : "error";
          const logMessage = `[${method}:${url}] Status: ${status} | Length: ${content_length} | Time: ${response_time} ms`;
          if (Config.nodeEnv !== "production") {
            logger.log(`${logLevel}`, logMessage);
          }
        },
      },
    }
  );
};
