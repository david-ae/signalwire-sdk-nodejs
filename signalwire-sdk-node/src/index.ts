import { ChatsBase } from "./chats/chatsbase";
import { Chats } from "./chats/chats";
import { applyMixins } from "./utils";

class Messaging extends ChatsBase {}
interface Messaging extends Chats {}

applyMixins(Messaging, [Chats]);

export { Messaging };
