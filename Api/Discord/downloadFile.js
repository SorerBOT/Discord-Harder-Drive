import fileNameToDiscordFormat from "../../Utils/fileNameToDiscordFormat.js";
import { Client, GatewayIntentBits } from "discord.js";
import bufferFromString from "../../Utils/bufferFromString.js";
import fileFromByteArray from "../../Utils/Files/fileFromByteArray.js";
import dotenv from "dotenv";
dotenv.config();

const { BOT_TOKEN, GUILD_ID } = process.env;

function downloadFile(fileName) {
    const channelName = fileNameToDiscordFormat(fileName);

    const client = new Client({
        intents: [
            GatewayIntentBits.Guilds,
    		GatewayIntentBits.GuildMessages,
    		GatewayIntentBits.MessageContent,
        ]
    });

    client.on("ready", async () => {
        const guild = client.guilds.cache.get(GUILD_ID);
        const category = guild.channels.cache.get(process.env.CATEGORY_ID);
        const channel = category.children.cache.find((channel) => channel.name === channelName);

        if (!channel) {
            console.error(`File: ${fileName} does not exist.`);
            return client.destroy();
        }
        const messageCollection = await channel.messages.fetch();
        const messages = Array.from(messageCollection);
        
        const messageStrings = messages.map(([index, message]) => {
            return message.content;
        }).toString();
        console.log(messageStrings.length);
        const buffer = bufferFromString(messageStrings);

        fileFromByteArray(buffer, "newFile.jpg");
        client.destroy();
    });

    client.login(BOT_TOKEN);

}

export default downloadFile;