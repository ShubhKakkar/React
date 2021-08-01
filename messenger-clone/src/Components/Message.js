import React from "react";

function Message({ username, text }) {
    const isuser = username === text.username;
  return (
    <>
      <div className={`card ${isuser?'message_user':""}`}>
        <p>{text.username}</p>
        <h3 className="card-text">{text.text}</h3>
      </div>
    </>
  );
}

export default Message;
