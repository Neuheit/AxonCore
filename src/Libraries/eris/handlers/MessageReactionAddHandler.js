import AHandler from '../../../Structures/Event/AHandler';

class MessageReactionAddHandler extends AHandler {
    handle(message) {
        return message.channel.guild ? message.channel.guild.id : null;
    }
}

export default MessageReactionAddHandler;
