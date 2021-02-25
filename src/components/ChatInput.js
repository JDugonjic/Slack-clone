import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { db } from "../firebase";
import firebase from "firebase";
import { ChatInputContainer } from "../styles/ChatInput.style";

function ChatInput({ channelId, channelName, chatRef }) {
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();

    if (!channelId) {
      return false;
    }

    db.collection("rooms").doc(channelId).collection("messages").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: "Jelena",
      userImage:
        "https://kids.sandiegozoo.org/sites/default/files/2019-07/animal-hero-bonoborighte.jpg",
    });

    chatRef.current.scrollIntoView({
      behavior: "smooth",
    });

    setInput("");
  };

  return (
    <ChatInputContainer>
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName}`}
        />
        <Button hidden onClick={sendMessage} type="submit">
          Send
        </Button>
      </form>
    </ChatInputContainer>
  );
}

export default ChatInput;
