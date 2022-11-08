// chats.ts
import { IBase } from "../interfaces/base.interface";
import { Base } from "../base";
import { NewMessage } from "../shared/types";

export interface Chat {
  (message: any): void;
}

export class Chats extends Base implements IBase {
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
