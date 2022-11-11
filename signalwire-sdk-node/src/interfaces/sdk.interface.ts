import { NewMessage } from "../shared/types";

abstract class ISDK {
  abstract on(event: string, callback: Function): any;
  abstract send(message: NewMessage): void;
  abstract disconnect(): void;
}

export { ISDK };
