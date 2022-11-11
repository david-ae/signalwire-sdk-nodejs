// chats.ts
import { ISDK } from "../interfaces/sdk.interface";
import { ChatsBase } from "./chatsbase";
import { NewMessage } from "../shared/types";

export interface Chat {
  (message: any): void;
}

export class Chats extends ChatsBase implements ISDK {
  async on(event: string, callback: Function) {
    const message = await this.triggerOn(event);
    return callback(message.toString());
  }

  send(message: NewMessage) {
    this.triggerSend(message);
  }

  disconnect() {
    this.triggerDisconnect();
  }
}
