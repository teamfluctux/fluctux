import {
  createLogger,
  format,
  LoggerOptions,
  transports,
  addColors,
} from "winston";
import { npm } from "winston/lib/winston/config";

const customFormat = format.printf(({ level, message, timestamp, label }) => {
  return `${timestamp} | [${level}] : ${label ? `${label} => ` : ""}${message}`;
});

const defaultLevels = npm.levels;
const defaultColors = npm.colors;
const customLevels = {
  levels: {
    ...defaultLevels,
    success: 0,
  },
  colors: {
    ...defaultColors,
    success: "green",
  },
};

const loggerOptions: LoggerOptions = {
  level: "info",
  levels: customLevels.levels,
  format: format.combine(
    format.timestamp({
      format: "DD-MM-YYYY HH:mm:ss",
    }),
    format.json(),
    format.colorize(),
    customFormat
  ),
  transports: [new transports.Console()],
};

addColors(customLevels.colors);
export const logger = createLogger(loggerOptions);
