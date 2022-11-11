import { NewMessage } from "signalwire-sdk-node/src/shared/types";
import { ISDK } from "signalwire-sdk-node/src/interfaces/sdk.interface";

export class BrowserjsSDK implements ISDK {
  ws: WebSocket;

  constructor() {
    this.ws = new WebSocket(
      "wss://demo.piesocket.com/v3/channel_123?api_key=VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV&notify_self:3241"
    );
  }
  on(event: string, callback: Function): any {
    if (event === "message") {
      this.ws.onmessage = (messaage) => {
        return callback(messaage);
      };
    } else if (event === "open") {
      this.ws.onopen = () => {
        return callback("Connected");
      };
    } else {
      return callback("Unrecognized");
    }
  }
  send(message: NewMessage) {
    this.ws.send(JSON.stringify(message));
  }
  disconnect() {
    this.ws.onclose = () => {
      console.log("WebSocket Disconnected");
    };
  }
}

const sdk = new BrowserjsSDK();
(window as any).sdk = sdk;
