import React from "react";
import {
  SidebarOptionChannel,
  SidebarOptionContainer,
} from "../styles/SidebarOption.style";

function SidebarOption({ Icon, title, addChannelOption }) {
  return (
    <div>
      <SidebarOptionContainer>
        {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
        {Icon ? (
          <h3>{title}</h3>
        ) : (
          <SidebarOptionChannel>
            <span>#</span> {title}
          </SidebarOptionChannel>
        )}
      </SidebarOptionContainer>
    </div>
  );
}

export default SidebarOption;
