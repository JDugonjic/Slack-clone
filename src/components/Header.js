import React from "react";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import {
  HeaderAvatar,
  HeaderContainer,
  HeaderLeft,
  HeaderRight,
  HeaderSearch,
} from "../styles/Header.style";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

function Header() {
  const [user] = useAuthState(auth);

  return (
    <div>
      <HeaderContainer>
        <HeaderLeft>
          <HeaderAvatar
            onClick={() => auth.signOut()}
            alt={user?.displayName}
            src={user?.photoURL}
          />
          <AccessTimeIcon />
        </HeaderLeft>
        <HeaderSearch>
          <SearchIcon />
          <input placeholder="Search channel" />
        </HeaderSearch>
        <HeaderRight>
          <HelpOutlineIcon />
        </HeaderRight>
      </HeaderContainer>
    </div>
  );
}

export default Header;
