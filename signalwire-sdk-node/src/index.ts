import { Base } from "./base";
import { Chats } from "./chats";
import { applyMixins } from "./utils";

class Messaging extends Base {}
interface Messaging extends Chats {}

applyMixins(Messaging, [Chats]);

export { Messaging };
