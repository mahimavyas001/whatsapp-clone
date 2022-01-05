import React from 'react';
import "./Sidebar.css";
import ChatIcon from '@mui/icons-material/Chat';
import {IconButton, Avatar } from "@material-ui/core";
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { SearchOutlined } from '@mui/icons-material';
import SidebarChat from "./SidebarChat";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className= "sidebar__header">
            <Avatar src="https://english.mathrubhumi.com/polopoly_fs/1.4591968.1583561158!/image/image.JPG_gen/derivatives/landscape_894_577/image.JPG" />
                <div className= "sidebar__headerRight">
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
        <div className="sidebar__search">
         <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input placeholder="Search or start new chat" type="text"/>
         </div>
        </div>

        <div className="sidebar__chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />

        </div>
    </div>
    )
}

export default Sidebar;
