import React, { useEffect, useState } from "react";
// import React from "react";
import Pusher from "pusher-js";
import "./App.css";
// import Login from "./component/auth/login.jsx";
import Sidebar from "./component/sidebar";
import Chat from "./component/chat";
import axios from "./axios";

function App() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    axios.get("/api/messages").then((response) => {
      setMessages(response.data);
    });
  }, []);
  useEffect(() => {
    var pusher = new Pusher("3782ff4701b848ad845a", {
      cluster: "ap2",
    });

    var channel = pusher.subscribe("messages");
    channel.bind("inserted", function (newMessages) {
      setMessages([...messages, newMessages]);
    });
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  return (
    <div className="app">
      <div className="app_body">
        {/* <Login /> */}
        <Sidebar />
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
