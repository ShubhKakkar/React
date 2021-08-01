import React, { useState, useEffect } from "react";
import { FormControl, Input, InputLabel, Button } from "@material-ui/core";
import Message from "./Message";

function App() {
  const [input, setInput] = useState("");
  const [userName, setUserName] = useState();
    const [messages, setMessages] = useState([
      { username:"shubham", text:"Let's start a chat" },
    ]);

  useEffect(() => {
    setUserName(prompt("Please, enter your name"));
  }, []);

  const handleInput = (event) => {
    setInput(event.currentTarget.value);
  };
  const sendMessage = (event) => {
    event.preventDefault();
    setMessages([...messages, { username: userName, text: input }]);
    setInput("");
  };
  return (
    <>
      <form>
        <FormControl>
          <InputLabel>Enter a message...</InputLabel>
          <Input type="text" value={input} onChange={handleInput} />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={sendMessage}
            disabled={!input}
          >
            Send Message
          </Button>
        </FormControl>
      </form>
      <div className="main">
        {messages.map((message) => {
          return <Message username={userName} text={message} />
        })}
      </div>
    </>
  );
}

export default App;
