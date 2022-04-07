import io from 'socket.io-client'
import "./test.css"
const socket = io.connect("http://localhost:5000");
import Chat from './Chat';
import React, { useState } from 'react'

const Test = () => {
    const[username , setUsername] = useState("");
    const [room, setRoom] = useState("");
    const [showChat, setShowChat] = useState(false);

    const joinRoom = ()=> {
        if(username!= "" && room!="")
        {
            socket.emit("joinRoom", room)
            setShowChat(true);
        }
    }
    return (
      <div className="App">
        {!showChat ? (
          <div className="joinChatContainer">
            <h3>Join A Chat</h3>
            <input
              type="text"
              placeholder="John..."
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Room ID..."
              onChange={(event) => {
                setRoom(event.target.value);
              }}
            />
            <button onClick={joinRoom}>Join A Room</button>
          </div>
        ) : (
          <Chat socket={socket} username={username} room={room} />
        )}
      </div>
    );
}

export default Test
