import winston from "winston";
const { combine, timestamp, colorize, printf, label } = winston.format; // can be used to Destructure
const MyFormat = winston.format.printf(
    ({ level, message, service, timestamp }) => {
        return `${timestamp} ${level} (${(service as string).toUpperCase()}): ${message}`;
    },
);
const loggerService = winston.createLogger({
    level: "info",
    format: winston.format.json(),
    defaultMeta: { service: "System" },
    transports: [
        new winston.transports.Console({
            format: combine(
                colorize(),
                timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
                label(),
                MyFormat,
            ),
        }),
    ],
});
//TODO: : How to use Types for Smart Logging
export default loggerService;
