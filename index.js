/* const app = require("express")();
const server = require("http").createServer(app);
const { Server } = new require("socket.io");
const io = new Server(server); */

const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

/* io.on("connection", (socket) => {
  socket.on("clientMessage", (msg) => {
    socket.emit("serverSentMessage", msg);
  });
});
 */
// emit korar somoy sob somoy io.emit korbo
io.on("connection", (socket) => {
  socket.on("chat", (msg) => {
    io.emit("chat_transfer", msg);
  });
});

server.listen(3000, () => {
  console.log("server running on http://localhost:3000");
});
