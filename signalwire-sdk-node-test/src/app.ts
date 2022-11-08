import { Messaging } from "signalwire-sdk-node";

const sdk = new Messaging();

sdk.on("message", (message) => {
  console.log("Received", message);
});
sdk.send({ content: "Love", id: 1, sentAt: new Date() });

sdk.disconnect();
