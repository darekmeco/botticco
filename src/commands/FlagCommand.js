import { Command } from "discord-akairo";
import axios from "axios";
import sharp from "sharp";

class FlagCommand extends Command {

    constructor() {
        super("flag", {
            aliases: ["flag"],
            args: [
                {
                    id: "query",
                }
            ]
        });
    }

    async exec(message, args) {
        axios({
            method: "get",
            url: `https://restcountries.eu/rest/v2/name/${args.query}`,
        }).then(async r => {
            if (r.data.length > 0) {
                const record = r.data[0];
                const input = (await axios({ url: record.flag, responseType: "arraybuffer" })).data;
                const output = await sharp(input).png().toBuffer();
                return message.reply(`Szukam ${args.query} ...`, {
                    files:[output]
                });
            } else {
                return message.reply(`Nie znalazlem, ${args.query} ...`);
            }
        }).catch(() => {
            return message.reply(`Nie znalazlem, ${args.query} ...`);
        });
    }
}

export default FlagCommand;
