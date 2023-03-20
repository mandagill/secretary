const { App } = require("@slack/bolt");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
});

(async () => {
  await app.start(process.env.PORT || 3000);

  console.log("💁 Secretary app is running!");
})();

app.message("ping", async ({ message, say }) => {
  await say(`Hey there <@${message.user}>!`);
});
