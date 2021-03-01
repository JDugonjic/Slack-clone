import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { auth, db } from "../firebase";
import firebase from "firebase";
import { ChatInputContainer } from "../styles/ChatInput.style";
import { useAuthState } from "react-firebase-hooks/auth";

function ChatInput({ channelId, channelName, chatRef }) {
  const [input, setInput] = useState("");
  const [user] = useAuthState(auth);

  const sendMessage = (e) => {
    e.preventDefault();

    if (!channelId) {
      return false;
    }

    db.collection("rooms").doc(channelId).collection("messages").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: user.displayName,
      userImage: user.photoURL,
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
