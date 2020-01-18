import { AkairoClient } from "discord-akairo";
import Config from "./libs/Config";

const config = new Config().init();

const client = new AkairoClient({
    ownerID: config.OWNER_ID,
    prefix: "//",
    commandDirectory: "./src/commands/",
    inhibitorDirectory: "./src/inhibitors/",
    listenerDirectory: "./src/listeners/"
});

client
    .login(config.TOKEN)
    .then(() => {
        console.log("Started up!");
    });
