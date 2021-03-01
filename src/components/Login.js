import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "../firebase";
import { LoginContainer, LoginInnerContainer } from "../styles/Login.style";

function Login() {
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src="http://assets.stickpng.com/images/5cb480cd5f1b6d3fbadece79.png"
          alt=""
        />
        <h1>Sign in to Slack clone app</h1>
        <p>jelena.slack.com</p>
        <Button onClick={signIn}>Sign in with Google</Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
}

export default Login;
