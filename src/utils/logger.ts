import log from "pino";
import dayjs from "dayjs";

export const logger = log({
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
    },
  },
  base: {
    pid: true,
  },
  timestamp: () => `,"time":"${dayjs().format()}`,
});
