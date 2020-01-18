import { Command } from "discord-akairo";
import sharp from "sharp";
import axios from "axios";

class MeCommand extends Command {

    constructor() {
        super("me", {
            aliases: ["me"]
        });
    }

    async exec(message) {
        console.log(message.member);
        const input = (await axios({ url: "https://restcountries.eu/data/pol.svg", responseType: "arraybuffer" })).data;
        const output = await sharp(input).png().toBuffer();

        return message.reply(`Jesteś ${message.member.nickname}.`, {
            files:[output]
        });
    }
}

export default MeCommand;
