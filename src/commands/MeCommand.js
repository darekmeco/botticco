import { Command } from "discord-akairo";

class MeCommand extends Command {

    constructor() {
        super("me", {
            aliases: ["me"]
        });
    }

    exec(message) {
        console.log(message.member);
        return message.reply(`Jesteś ${message.member.nickname}.`);
    }
}

export default MeCommand;
