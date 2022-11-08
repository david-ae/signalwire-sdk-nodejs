import { WebSocket } from "ws";
import { configuration } from "./configuration";
import { NewMessage } from "./shared/types";
import { writeFile, appendFile } from "fs";

export class Base {
  private baseUrl: string = `${configuration.Url}${configuration.ApiKey}`;
  protected ws = new WebSocket(`${this.baseUrl}:${configuration.Port}`);

  constructor() {}

  triggerOn(event: string): any {
    return new Promise((resolve, reject) => {
      this.ws.on(event, (data) => {
        appendFile("log.txt", `RECV:${data}\n`, function (err) {
          if (err) throw new Error(`${err}`);
        });
        return resolve(data);
      });
    });
  }

  triggerDisconnect() {
    this.ws.on("close", () => {
      console.log(`[SDK] Disconnected`);
      this.ws.send("Disconnected");
    });
  }

  async triggerSend(message: NewMessage) {
    await this.ws.on("open", () => {
      this.ws.send(
        JSON.stringify({
          id: message.id,
          content: message.content,
          sentAt: message.sentAt,
        })
      );

      writeFile("log.txt", `SEND:${message.content}\n`, function (err) {
        if (err) throw new Error(`${err}`);
      });
    });
  }
}
