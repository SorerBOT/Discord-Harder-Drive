import getByteArray from "../../Utils/Files/getByteArray.js";
import stringToDiscordFormat from "../../Utils/stringToDiscordFormat.js";
import { Client, GatewayIntentBits } from "discord.js";
import dotenv from "dotenv";

dotenv.config();

const { BOT_TOKEN, GUILD_ID } = process.env;

function uploadFile(fileName) {

    const client = new Client({
        intents: [
            GatewayIntentBits.Guilds,
    		GatewayIntentBits.GuildMessages,
    		GatewayIntentBits.MessageContent,
        ]
    });
    

    const data = getByteArray(`./${fileName}`);
    const stringData = data.toString("ucs2");
    const discordFormat = stringToDiscordFormat(stringData);

    //fileFromByteArray(newData, "newFile.jpg");

    client.on("ready", async () => {
        const guild = client.guilds.cache.get(GUILD_ID);
        const category = guild.channels.cache.get(process.env.CATEGORY_ID);

        const channel = await category.children.create({
            name: fileName.replace('.', '-'),
        });

        const promises = discordFormat.map(async (message) => {
            await channel.send(message);
        });

        await Promise.all(promises);

        client.destroy();
    });

    client.login(BOT_TOKEN);
}

export default uploadFile;