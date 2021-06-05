import { IConfig } from "terraria-server";
import * as dotenv from "dotenv";

dotenv.config();

const CONFIG: IConfig = {
    SERVER_URL:
        "https://terraria.org/system/dedicated_servers/archives/000/000/046/original/terraria-server-1423.zip", // Terraria official server 1.4.1.2
    BUILD_DIRECTORY: "./server",
    FILE_NAME: "server.zip",
    PORT: parseInt(process.env.PORT as string) || 3000,
    SERVER_CONFIG: {
        WORLDS_FOLDER: "./server/1423/Linux/worlds",
        WORLD_FILE: "Ensalandia",
        BAN_LIST: "banlist",
        MOTD: "Bienvenido a TeamFood uwu",
        PORT: 8080,
        PASSWORD: "",
        MAX_PLAYERS: 4,
        LANGUAGE: "es-ES",
        DIFFICULTY: 1,
        WORLD_SIZE: 2,
    },
};

export default CONFIG; 
