import { LogLevel } from "@slack/bolt";

export default {
  ALIAS: process.env.ALIAS || "?",
  LOG_LEVEL: (process.env.LOG_LEVEL || LogLevel.INFO) as LogLevel,
  PORT: parseInt(process.env.PORT || "9001", 10),
  SLACK_SIGNING_SECRET: process.env.SLACK_SIGNING_SECRET || "",
  SLACK_APP_TOKEN: process.env.SLACK_APP_TOKEN || "",
  SLACK_BOT_TOKEN: process.env.SLACK_BOT_TOKEN || "",
} as const;

// Until I make a proper data model, storing user prefs here
type userOptions = {
  userId: string;
  startWork: number;
  endWork: number;
};

export const defaultUserPrefs = {
  userId: "U04PWADG2TE",
  startWork: 9,
  endWork: 17,
};
