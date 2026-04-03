import winston from "winston";

export const appLogger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.colorize(),      // colors in terminal
    winston.format.timestamp(),
    winston.format.printf(({ level, message, timestamp, ...meta }) => {
      return `[${timestamp}] ${level}: ${message} ${
        Object.keys(meta).length ? JSON.stringify(meta) : ""
      }`;
    })
  ),
  transports: [
    new winston.transports.Console(),
  ],
});