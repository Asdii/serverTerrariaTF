import { IConfig } from "terraria-server";
import * as dotenv from "dotenv";

dotenv.config();

const CONFIG: IConfig = {
    SERVER_URL:
        "https://terraria.org/system/dedicated_servers/archives/000/000/042/original/terraria-server-1412.zip", // Terraria official server 1.4.1.2
    BUILD_DIRECTORY: "./server",
    FILE_NAME: "server.zip",
    PORT: parseInt(process.env.PORT as string) || 3000,
    SERVER_CONFIG: {
        WORLDS_FOLDER: "./server/worlds",
        WORLD_FILE: "Ceayaver",
        BAN_LIST: "banlist",
        MOTD: "Welcome to Ceayaver!",
        PORT: 8080,
        PASSWORD: "xxx",
        MAX_PLAYERS: 5,
        LANGUAGE: "en-US",
        DIFFICULTY: 3,
        WORLD_SIZE: 1,
    },
};

export default CONFIG;
