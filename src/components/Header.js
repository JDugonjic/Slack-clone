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

function Header() {
  return (
    <div>
      <HeaderContainer>
        <HeaderLeft>
          <HeaderAvatar
          // TODO: Add onClick
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
