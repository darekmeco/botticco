import { Command } from "discord-akairo";

class AntekCommand extends Command {

    constructor() {
        super("antek", {
            aliases: ["antek"]
        });
    }

    exec(message) {
        return message.reply("Antek to bosy nie cycek :)");
    }
}

export default AntekCommand;
