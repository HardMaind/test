import React, { useState } from "react";
import "../component css/chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AttachmentIcon from "@material-ui/icons/Attachment";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import axios from "../axios";

export default function Chat({ messages }) {
  let [input, setInput] = useState("");
  const sendMessage = async (event) => {
    event.preventDefault();
    var date = Date.now();
    var currentDate = new Date(date);
    currentDate.getTimezoneOffset();
    console.log(currentDate);
    await axios.post("/api/messages/new", {
      name: "Demo",
      message: input,
      timestamp: currentDate,
      receiver: false,
    });
    setInput("");
  };
  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar />
        <div className="chat_header_info">
          <h3>Room Name</h3>
          <p>Last seen at...</p>
        </div>
        <div className="chat_headerright">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <AttachmentIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat_body">
        {messages.map((message) => (
          <p className={`chat_message ${message.receiver && `chat_reciver`} `}>
            <span className="chat_message_name">{message.name}</span>
            {message.message}
            <span className="chat_message_timesamp">{message.timestamp}</span>
          </p>
        ))}
      </div>
      <div className="chat_footer">
        <IconButton>
          <InsertEmoticonIcon />
        </IconButton>
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="type a message"
          />
          <button onClick={sendMessage} type="submit">
            Send message
          </button>
        </form>
        <IconButton>
          <MicIcon />
        </IconButton>
      </div>
    </div>
  );
}
