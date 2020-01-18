import { Command } from "discord-akairo";

class DarekCommand extends Command {

    constructor() {
        super("darek", {
            aliases: ["darek"]
        });
    }

    exec(message) {
        return message.reply("***Darek***");
    }
}

export default DarekCommand;
