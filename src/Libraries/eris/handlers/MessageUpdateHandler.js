import AHandler from '../../../Structures/Event/AHandler';

class MessageUpdateHandler extends AHandler {
    handle(message) {
        return message.channel.guild ? message.channel.guild.id : null;
    }
}

export default MessageUpdateHandler;
