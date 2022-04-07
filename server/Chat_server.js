const express = require("express");
const app = express();
const cors = require('cors')
const{Server} =require("socket.io")
const http = require('http')

const PORT  = 5000

app.use(cors());
const server = http.createServer(app)
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket)=>{
  console.log(socket.id);

  socket.on("joinRoom" , (data)=> {
    socket.join(data);
    console.log(`User with id: ${socket.id} joined room: ${data}`);
  })

  socket.on("sendMessage" ,(data)=> {
    console.log(`${data.time} ${data.message}`);
    socket.to(data.room).emit("rcm" , data);
  });
  socket.on("disconnect" , ()=>{
    console.log("user disconnected", socket.id);
  });
});

server.listen(PORT, ()=>{
console.log('chat server runing on port 5000')
});