import React from "react";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Avatar, IconButton } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import SidebarChat from './sidebarchat'
import "./sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src="https://www.w3schools.com/howto/img_avatar.png" />

        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>

          <IconButton>
            <ChatIcon />
          </IconButton>

          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      {/* for searching new contacts or chats */}

      <div className="sidebar__search">
        <div className="sidebar__searchcontainer">
          <SearchOutlined />

          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>

      <div className='sidebar__chats'>

        <SidebarChat />

      </div>

    </div>
  );
}

export default Sidebar;
