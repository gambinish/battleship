const express = require("express");
const socket = require("socket.io");

const PORT = 8080;

const app = express();

const server = app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

const io = socket(server);

io.on("connection", socket => {
  // console.log(socket.id);

  socket.on("SEND_MESSAGE", data => {
    console.log("message", data);
    io.emit("RECEIVE_MESSAGE", data);
  });

  socket.on("LAUNCH_MISSLE", data => {
    console.log("data", data);
    io.emit("RECEIVE_MISSLE", data);
  });
});
