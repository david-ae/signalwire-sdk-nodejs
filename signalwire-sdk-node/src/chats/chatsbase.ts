import { configuration } from "./../shared/configuration";
import { NewMessage } from "../shared/types";
import { writeFile, appendFile } from "fs";
import { WebSocket } from "ws";

export class ChatsBase {
  private baseUrl = `${configuration.Url}${configuration.ApiKey}`;
  protected ws = new WebSocket(`${this.baseUrl}:${configuration.Port}`);

  public triggerOn(event: string): any {
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

  triggerSend(message: NewMessage) {
    this.ws.on("open", () => {
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
