import { NewMessage } from "../shared/types";

abstract class IBase {
  abstract on(event: string, callback: Function);
  abstract send(message: NewMessage);
  abstract disconnect();
}

export { IBase };
