import {
  createLogger,
  format,
  LoggerOptions,
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



export class CustomLogger {
  public origin: string | undefined= undefined;
  public logger: CustomLoggerType;
  public loggerOptions: LoggerOptions;
  public customFormat: any;
  constructor(origin: string) {
    this.origin = origin;
    this.customFormat = format.printf(
      ({ level, message, timestamp, label }) => {
        return `${timestamp} | ORIGIN: ${this.origin} | [${level}] : ${label ? `${label} => ` : ""}${message}`;
      }
    );

    this.loggerOptions = {
      level: "info",
      levels: customLevels.levels,
      format: format.combine(
        format.timestamp({
          format: "DD-MM-YYYY HH:mm:ss",
        }),
        format.json(),
        format.colorize(),
        this.customFormat
      ),
      transports: [new transports.Console()],
    };

    this.logger = createLogger(this.loggerOptions) as CustomLoggerType;
  }
}
