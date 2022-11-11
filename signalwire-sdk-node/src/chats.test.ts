// chats.test.ts
import "jest";
import { Chats } from "./chats/chats";
import { NewMessage } from "./shared/types";
import { existsSync, readFileSync } from "fs";

describe("WebSocket Server", () => {
  const sdk = new Chats();
  let fileExistsWithData = false;

  test("should test that a connection is made, log.txt file created and has data", () => {
    const msg: NewMessage = {
      content: "Love",
      id: 1,
      sentAt: new Date(),
    };
    sdk.send(msg);

    sdk.disconnect();

    const path = "./log.txt";
    if (existsSync(path)) {
      if (readFileSync(path).length !== 0) {
        fileExistsWithData = true;
      }
    }

    expect(fileExistsWithData).toBe(true);
  });
});
