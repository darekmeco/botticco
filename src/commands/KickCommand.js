import { Command } from "discord-akairo";

class KickCommand extends Command {
    constructor() {
        super("kick", {
            aliases: ["kick"],
            args: [
                {
                    id: "member",
                    type: "member"
                }
            ]
            ,
            clientPermissions: ["KICK_MEMBERS"],
            channelRestriction: "guild"
        });
    }

    userPermissions(message) {
        return message.member.roles.exists(role => role.name === "moderator");
    }

    exec(message, args) {
        if (!args.member) {
            return message.reply("No member found with that name.");
        }

        return args.member.kick().then(() => {
            return message.reply(`${args.member} został wywalony,bo zrobił coś złego!`);
        }).catch((e) => {
            console.log(e);
        });
    }
}

export default KickCommand;
