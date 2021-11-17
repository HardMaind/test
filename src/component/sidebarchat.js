import React from "react";
import "../component css/sidebarchat.css";
import { Avatar } from "@material-ui/core";
export default function sidebarchat() {
  return (
    <div className="sidebarchat">
      <Avatar />
      <div className="sidebarchat_info">
        <h2>Room name</h2>
        <p>This is last message</p>
      </div>
    </div>
  );
}
