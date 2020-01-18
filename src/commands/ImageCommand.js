import { Command } from "discord-akairo";
import axios from "axios";

class ImageCommand extends Command {

    constructor() {
        super("image", {
            aliases: ["image"],
            args: [
                {
                    id: "query",
                }
            ]
        });
    }

    exec(message, args) {

        axios({
            method: "get",
            url: `https://pixabay.com/api/?key=14958709-29c21ca045da5d7169dafc530&q=${args.query}&image_type=photo&per_page=50`,
        }).then(r => {
            if (r.data.hits.length > 0) {
                const record = r.data.hits[(Math.floor(Math.random() * r.data.hits.length))];
                return message.reply(`Szukam ${args.query} ...`, {
                    files:[record.webformatURL]
                });
            } else {
                return message.reply(`Nie znalazlem, ${args.query} ...`);
            }
        });

    }
}

export default ImageCommand;
