/**
 * @typedef {String} EVENTS
 * * GUILD_CREATE: 'guildCreate'
 * * GUILD_DELETE: 'guildDelete'
 * * GUILD_UPDATE: 'guildUpdate'
 * * GUILD_UNAVAILABLE: 'guildUnavailable'
 * * GUILD_AVAILABLE: 'guildAvailable'
 * * GUILD_MEMBER_ADD: 'guildMemberAdd'
 * * GUILD_MEMBER_REMOVE: 'guildMemberRemove'
 * * GUILD_MEMBER_UPDATE: 'guildMemberUpdate'
 * * GUILD_MEMBER_AVAILABLE: 'guildMemberAvailable'
 * * GUILD_MEMBER_SPEAKING: 'guildMemberSpeaking'
 * * GUILD_MEMBERS_CHUNK: 'guildMembersChunk'
 * * GUILD_ROLE_CREATE: 'roleCreate'
 * * GUILD_ROLE_DELETE: 'roleDelete'
 * * GUILD_ROLE_UPDATE: 'roleUpdate'
 * * GUILD_EMOJIS_UPDATE: 'guildEmojisUpdate'
 * * GUILD_BAN_ADD: 'guildBanAdd'
 * * GUILD_BAN_REMOVE: 'guildBanRemove'
 * * UNAVAILABLE_GUILD_CREATE: 'unavailableGuildCreate'
 * * CHANNEL_CREATE: 'channelCreate'
 * * CHANNEL_DELETE: 'channelDelete'
 * * CHANNEL_UPDATE: 'channelUpdate'
 * * CHANNEL_PIN_UPDATE: 'channelPinUpdate'
 * * MESSAGE_CREATE: 'messageCreate'
 * * MESSAGE_DELETE: 'messageDelete'
 * * MESSAGE_UPDATE: 'messageUpdate'
 * * MESSAGE_DELETE_BULK: 'messageDeleteBulk'
 * * MESSAGE_REACTION_ADD: 'messageReactionAdd'
 * * MESSAGE_REACTION_REMOVE: 'messageReactionRemove'
 * * MESSAGE_REACTION_REMOVE_ALL: 'messageReactionRemoveAll'
 * * TYPING_START: 'typingStart'
 * * USER_UPDATE: 'userUpdate'
 * * PRESENCE_UPDATE: 'presenceUpdate'
 * * VOICE_CHANNEL_JOIN: 'voicecChannelJoin'
 * * VOICE_CHANNEL_LEAVE: 'voiceChannelLeave'
 * * VOICE_CHANNEL_SWITCH: 'voiceChannelSwitch'
 * * VOICE_STATE_UPDATE: 'voiceStateUpdate'
 * * WEBHOOKS_UPDATE: 'webhookUpdate'
 * * SHARD_DISCONNECT: 'shardDisconnect'
 * * SHARD_PRE_READY: 'shardPreReady'
 * * SHARD_READY: 'shardReady'
 * * SHARD_RESUME: 'shardResume'
 * * UNKNOWN: 'unknown'
 * * CONNECT: 'connect'
 * * DISCONNECT: 'disconnect'
 * * ERROR: 'error'
 * * WARN: 'warn'
 * * DEBUG: 'debug'
 * * READY: 'ready'
 * * HELLO: 'hello'
 * * RATE_LIMIT: 'rateLimit'
 * * RAW_WS: 'rawWS'
 */
export const EVENTS = {
    GUILD_CREATE: 'guildCreate',
    GUILD_DELETE: 'guildDelete',
    GUILD_UPDATE: 'guildUpdate',
    GUILD_UNAVAILABLE: 'guildUnavailable',
    GUILD_AVAILABLE: 'guildAvailable',
    GUILD_MEMBER_ADD: 'guildMemberAdd',
    GUILD_MEMBER_REMOVE: 'guildMemberRemove',
    GUILD_MEMBER_UPDATE: 'guildMemberUpdate',
    GUILD_MEMBER_AVAILABLE: 'guildMemberAvailable',
    GUILD_MEMBER_SPEAKING: 'guildMemberSpeaking',
    GUILD_MEMBERS_CHUNK: 'guildMembersChunk',
    GUILD_ROLE_CREATE: 'roleCreate',
    GUILD_ROLE_DELETE: 'roleDelete',
    GUILD_ROLE_UPDATE: 'roleUpdate',
    GUILD_EMOJIS_UPDATE: 'guildEmojisUpdate',
    GUILD_BAN_ADD: 'guildBanAdd',
    GUILD_BAN_REMOVE: 'guildBanRemove',
    UNAVAILABLE_GUILD_CREATE: 'unavailableGuildCreate',
    CHANNEL_CREATE: 'channelCreate',
    CHANNEL_DELETE: 'channelDelete',
    CHANNEL_UPDATE: 'channelUpdate',
    CHANNEL_PIN_UPDATE: 'channelPinUpdate',
    MESSAGE_CREATE: 'messageCreate',
    MESSAGE_DELETE: 'messageDelete',
    MESSAGE_UPDATE: 'messageUpdate',
    MESSAGE_DELETE_BULK: 'messageDeleteBulk',
    MESSAGE_REACTION_ADD: 'messageReactionAdd',
    MESSAGE_REACTION_REMOVE: 'messageReactionRemove',
    MESSAGE_REACTION_REMOVE_ALL: 'messageReactionRemoveAll',
    TYPING_START: 'typingStart',
    USER_UPDATE: 'userUpdate',
    PRESENCE_UPDATE: 'presenceUpdate',
    VOICE_CHANNEL_JOIN: 'voicecChannelJoin',
    VOICE_CHANNEL_LEAVE: 'voiceChannelLeave',
    VOICE_CHANNEL_SWITCH: 'voiceChannelSwitch',
    VOICE_STATE_UPDATE: 'voiceStateUpdate',
    WEBHOOKS_UPDATE: 'webhookUpdate',
    SHARD_DISCONNECT: 'shardDisconnect',
    SHARD_PRE_READY: 'shardPreReady',
    SHARD_READY: 'shardReady',
    SHARD_RESUME: 'shardResume',
    UNKNOWN: 'unknown',
    CONNECT: 'connect',
    DISCONNECT: 'disconnect',
    ERROR: 'error',
    WARN: 'warn',
    DEBUG: 'debug',
    READY: 'ready',
    HELLO: 'hello',
    RATE_LIMIT: 'rateLimit',
    RAW_WS: 'rawWS',
};

/**
 * @typedef {String} DISCORD_LIB_PERMISSIONS
 * * CREATE_INSTANT_INVITE: 'createInstantInvite'
 * * KICK_MEMBERS: 'kickMembers'
 * * BAN_MEMBERS: 'banMembers'
 * * ADMINISTRATOR: 'administrator'
 * * MANAGE_CHANNELS: 'manageChannels'
 * * MANAGE_GUILD: 'manageGuild'
 * * ADD_REACTIONS: 'addReactions'
 * * VIEW_AUDIT_LOG: 'viewAuditLog'
 * * PRIORITY_SPEAKER: 'voicePrioritySpeaker'
 * * STREAM: 'stream'
 * * VIEW_CHANNEL: 'readMessages'
 * * SEND_MESSAGES: 'sendMessages'
 * * SEND_TTS_MESSAGES: 'sendTTSMessages'
 * * MANAGE_MESSAGES: 'manageMessages'
 * * EMBED_LINKS: 'embedLinks'
 * * ATTACH_FILES: 'attachFiles'
 * * READ_MESSAGE_HISTORY: 'readMessageHistory'
 * * MENTION_EVERYONE: 'mentionEveryone'
 * * USE_EXTERNAL_EMOJIS: 'externalEmojis'
 * * CONNECT: 'voiceConnect'
 * * SPEAK: 'voiceSpeak'
 * * MUTE_MEMBERS: 'voiceMuteMembers'
 * * DEAFEN_MEMBERS: 'voiceDeafenMembers'
 * * MOVE_MEMBERS: 'voiceMoveMembers'
 * * USE_VAD: 'voiceUseVAD'
 * * CHANGE_NICKNAME: 'changeNickname'
 * * MANAGE_NICKNAMES: 'manageNicknames'
 * * MANAGE_ROLES: 'manageRoles'
 * * MANAGE_WEBHOOKS: 'manageWebhooks'
 * * MANAGE_EMOJIS: 'manageEmojis'
 */
export const DISCORD_LIB_PERMISSIONS = {
    CREATE_INSTANT_INVITE: 'createInstantInvite',
    KICK_MEMBERS: 'kickMembers',
    BAN_MEMBERS: 'banMembers',
    ADMINISTRATOR: 'administrator',
    MANAGE_CHANNELS: 'manageChannels',
    MANAGE_GUILD: 'manageGuild',
    ADD_REACTIONS: 'addReactions',
    VIEW_AUDIT_LOG: 'viewAuditLog',
    PRIORITY_SPEAKER: 'voicePrioritySpeaker',
    STREAM: 'stream',
    VIEW_CHANNEL: 'readMessages',
    SEND_MESSAGES: 'sendMessages',
    SEND_TTS_MESSAGES: 'sendTTSMessages',
    MANAGE_MESSAGES: 'manageMessages',
    EMBED_LINKS: 'embedLinks',
    ATTACH_FILES: 'attachFiles',
    READ_MESSAGE_HISTORY: 'readMessageHistory',
    MENTION_EVERYONE: 'mentionEveryone',
    USE_EXTERNAL_EMOJIS: 'externalEmojis',
    CONNECT: 'voiceConnect',
    SPEAK: 'voiceSpeak',
    MUTE_MEMBERS: 'voiceMuteMembers',
    DEAFEN_MEMBERS: 'voiceDeafenMembers',
    MOVE_MEMBERS: 'voiceMoveMembers',
    USE_VAD: 'voiceUseVAD',
    CHANGE_NICKNAME: 'changeNickname',
    MANAGE_NICKNAMES: 'manageNicknames',
    MANAGE_ROLES: 'manageRoles',
    MANAGE_WEBHOOKS: 'manageWebhooks',
    MANAGE_EMOJIS: 'manageEmojis',
};

/**
 * @typedef {Array<String>} PERMISSIONS
 * * 'createInstantInvite'
 * * 'kickMembers'
 * * 'banMembers'
 * * 'administrator'
 * * 'manageChannels'
 * * 'manageGuild'
 * * 'addReactions'
 * * 'viewAuditLog'
 * * 'voicePrioritySpeaker'
 * * 'stream'
 * * 'readMessages'
 * * 'sendMessages'
 * * 'sendTTSMessages'
 * * 'manageMessages'
 * * 'embedLinks'
 * * 'attachFiles'
 * * 'readMessageHistory'
 * * 'mentionEveryone'
 * * 'externalEmojis'
 * * 'voiceConnect'
 * * 'voiceSpeak'
 * * 'voiceMuteMembers'
 * * 'voiceDeafenMembers'
 * * 'voiceMoveMembers'
 * * 'voiceUseVAD'
 * * 'changeNickname'
 * * 'manageNicknames'
 * * 'manageRoles'
 * * 'manageWebhooks'
 * * 'manageEmojis'
 */
export const PERMISSIONS = [
    'createInstantInvite',
    'kickMembers',
    'banMembers',
    'administrator',
    'manageChannels',
    'manageGuild',
    'addReactions',
    'viewAuditLog',
    'voicePrioritySpeaker',
    'stream',
    'readMessages',
    'sendMessages',
    'sendTTSMessages',
    'manageMessages',
    'embedLinks',
    'attachFiles',
    'readMessageHistory',
    'mentionEveryone',
    'externalEmojis',
    'voiceConnect',
    'voiceSpeak',
    'voiceMuteMembers',
    'voiceDeafenMembers',
    'voiceMoveMembers',
    'voiceUseVAD',
    'changeNickname',
    'manageNicknames',
    'manageRoles',
    'manageWebhooks',
    'manageEmojis',
];

/**
 * @typedef {String} PERMISSIONS_NAMES
 * * createInstantInvite: 'Create Instant Invite'
 * * kickMembers: 'Kick Members'
 * * banMembers: 'Ban Members'
 * * administrator: 'Administrator'
 * * manageChannels: 'Manage Channels'
 * * manageGuild: 'Manage Guild'
 * * addReactions: 'Add Reactions'
 * * viewAuditLog: 'View Audit Log'
 * * voicePrioritySpeaker: 'Priority Speaker'
 * * stream: 'Stream'
 * * readMessages: 'Read Messages'
 * * sendMessages: 'Send Messages'
 * * sendTTSMessages: 'Send TTS Messages'
 * * manageMessages: 'Manage Messages'
 * * embedLinks: 'Embed Links'
 * * attachFiles: 'Attach Files'
 * * readMessageHistory: 'Read Message History'
 * * mentionEveryone: 'Mention Everyone'
 * * externalEmojis: 'External Emojis'
 * * voiceConnect: 'Voice Connect'
 * * voiceSpeak: 'Voice Speak'
 * * voiceMuteMembers: 'Voice Mute Members'
 * * voiceDeafenMembers: 'Voice Deafen Members'
 * * voiceMoveMembers: 'Voice Move Members'
 * * voiceUseVAD: 'Voice Use VAD'
 * * changeNickname: 'Change Nickname'
 * * manageNicknames: 'Manage Nicknames'
 * * manageRoles: 'Manage Roles'
 * * manageWebhooks: 'Manage Webhooks'
 * * manageEmojis: 'Manage Emojis'
*/
export const PERMISSIONS_NAMES = {
    createInstantInvite: 'Create Instant Invite',
    kickMembers: 'Kick Members',
    banMembers: 'Ban Members',
    administrator: 'Administrator',
    manageChannels: 'Manage Channels',
    manageGuild: 'Manage Guild',
    addReactions: 'Add Reactions',
    viewAuditLog: 'View Audit Log',
    voicePrioritySpeaker: 'Priority Speaker',
    stream: 'Stream',
    readMessages: 'Read Messages',
    sendMessages: 'Send Messages',
    sendTTSMessages: 'Send TTS Messages',
    manageMessages: 'Manage Messages',
    embedLinks: 'Embed Links',
    attachFiles: 'Attach Files',
    readMessageHistory: 'Read Message History',
    mentionEveryone: 'Mention Everyone',
    externalEmojis: 'External Emojis',
    voiceConnect: 'Voice Connect',
    voiceSpeak: 'Voice Speak',
    voiceMuteMembers: 'Voice Mute Members',
    voiceDeafenMembers: 'Voice Deafen Members',
    voiceMoveMembers: 'Voice Move Members',
    voiceUseVAD: 'Voice Use VAD',
    changeNickname: 'Change Nickname',
    manageNicknames: 'Manage Nicknames',
    manageRoles: 'Manage Roles',
    manageWebhooks: 'Manage Webhooks',
    manageEmojis: 'Manage Emojis',
};

export default {
    EVENTS,
    DISCORD_LIB_PERMISSIONS,
    PERMISSIONS,
    PERMISSIONS_NAMES,
};
