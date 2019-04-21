import React, { useState } from "react";
import io from "socket.io-client";

const ChatRoom = () => {
  let [username, setUsername] = useState("");
  let [message, setMessage] = useState("");
  let [messages, setMessages] = useState([]);
  const endpoint = "localhost:8080";

  const socket = io(endpoint);

  socket.on("RECEIVE_MESSAGE", data => {
    // alert(data);
    // console.log(data.message);
    addMessage(data);
  });

  const addMessage = data => {
    setMessages([...messages, data]);
  };

  const sendMessage = () => {
    socket.emit("SEND_MESSAGE", {
      username,
      message
    });
    setMessage("");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <div className="card">
            <div className="card-body">
              <div className="card-title">Chatroom</div>
              <hr />
              <div className="messages">
                {messages.map(message => {
                  return (
                    <div>
                      {message.username}: {message.message}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="card-footer">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={e => setUsername(e.target.value)}
                className="form-control"
              />
              <br />
              <input
                type="text"
                placeholder="Message"
                className="form-control"
                value={message}
                onChange={e => setMessage(e.target.value)}
              />
              <br />
              <button
                onClick={() => {
                  sendMessage();
                }}
                className="btn btn-primary form-control"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
