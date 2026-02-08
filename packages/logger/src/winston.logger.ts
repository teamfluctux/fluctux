import {
  createLogger,
  format,
  LoggerOptions as LoggerOptionsType,
  transports,
  addColors,
  Logger,
} from "winston";
import { npm } from "winston/lib/winston/config";

type LogMetadata = {
  label?: string;
  // to allow pass other custom properties without errors as Logger supports meta to pass custom properties
  [key: string]: any;
};

type CustomLoggerType = {
  log: (
    level: keyof typeof customLevels.levels,
    message: string,
    meta?: LogMetadata
  ) => CustomLoggerType;
  info: (message: string, meta?: LogMetadata) => CustomLoggerType;
  error: (message: string, meta?: LogMetadata) => CustomLoggerType;
  warn: (message: string, meta?: LogMetadata) => CustomLoggerType;
} & Logger;

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

addColors(customLevels.colors);

const CustomLoggerFormat = format.printf(
  ({ level, message, timestamp, label }) => {
    return `${timestamp} | [${level}] : ${label ? `${label} => ` : ""}${message}`;
  }
);

const LoggerOptions: LoggerOptionsType = {
  level: "info",
  levels: customLevels.levels,
  format: format.combine(
    format.timestamp({
      format: "DD-MM-YYYY HH:mm:ss",
    }),
    format.json(),
    format.colorize(),
    CustomLoggerFormat
  ),
  transports: [new transports.Console()],
};

export const logger = createLogger(LoggerOptions) as CustomLoggerType;


