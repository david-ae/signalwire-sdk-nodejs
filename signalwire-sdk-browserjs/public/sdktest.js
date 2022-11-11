const ul = document.getElementById("chats");
sdk.on("open", (message) => {
  console.log(message);
  sdk.send(
    JSON.stringify({
      event: "new_joining",
      sender: "username",
    })
  );
});

sdk.on("message", (message) => {
  if (message) {
    console.log("Received", message.data);
    const payload = message.data;
    const li = document.createElement("li");
    li.innerHTML = `RECV:${payload}`;
    ul.appendChild(li);
  }
});
const btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  const input = document.getElementById("message");
  const message = JSON.stringify({ name: "You", message: input.value });
  sdk.send(message);
  const li = document.createElement("li");
  li.innerHTML = `SEND:${message}`;
  ul.appendChild(li);
});
