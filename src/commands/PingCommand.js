import { Command } from "discord-akairo";

class PingCommand extends Command {

    constructor() {
        super("ping", {
            aliases: ["ping"]
        });
    }

    exec(message) {
        return message.reply("Pong! Dupa!!!");
    }
}

export default PingCommand;
