import { Command } from "discord-akairo";

class HelpCommand extends Command {

    constructor() {
        super("help", {
            aliases: ["help","h"]
        });
    }

    exec(message) {
        return message.reply(`*** polecenia na serwerze to ***
//kick
//help
//darek
//antek
//ping
      `);
    }
}

export default HelpCommand;
