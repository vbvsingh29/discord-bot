import { Client, Events, GatewayIntentBits } from "discord.js";
import "dotenv/config";

const BOT_TOKEN = process.env.DISCORDJS_BOT_TOKEN;
if (!BOT_TOKEN) {
  console.error("Missing DISCORDJS_BOT_TOKEN in environment variables.");
  process.exit(1);
}
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// client.on("ready", () => {
//   if (client.user) {
//     console.log(`Logged in as ${client.user.tag}!`);
//   }
// });

// client.on("interactionCreate", async (interaction) => {
//   if (!interaction.isChatInputCommand()) return;

//   if (interaction.commandName === "ping") {
//     await interaction.reply("Pong!");
//   }
// });
client.once(Events.ClientReady, (readyClient) => {
  console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});
client.login(BOT_TOKEN).catch(console.error);
