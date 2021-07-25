import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, MoreVert, SearchOutlined } from "@material-ui/icons";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import "./chat.css";
import axios from './axios' ;
import { useState } from "react";

function chat({ messages }) {

  const [input,setInput] = useState("") ; 

  const sendMessage = async (e) => 
  { 

    e.preventDefault() ;

    await axios.post('/messages/new',{
      message: input,
      name:'madhav',
      timestamp:'time',
      received:true
    })
    
    setInput('') ;
  }

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />

        <div className="chat__headerinfo">
          <h3>Room Name</h3>
          <p>Last seen at....</p>
        </div>

        <div className="chat__headerright">
          <IconButton>
            <SearchOutlined />
          </IconButton>

          <IconButton>
            <AttachFile />
          </IconButton>

          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

        <div className='chat__body'>
            {messages.map((message) => (
                <p className="chat__message">
                <span className="chat__name">{message.name}</span>
                {message.message}
                <span className="chat__timestamp">{new Date().toUTCString()}</span>
                </p>
            ))}
        </div>

      <div className="chat__footer">
        <InsertEmoticonIcon />

        <form>
          <input type="text"
          placeholder="enter a message" 
          value={input} 
          onChange={ (e)=>setInput(e.target.value) } 
          />

          <button type="submit" onClick={sendMessage} >Send a message</button>
        </form>

        <MicIcon />
      </div>
    </div>
  );
}

export default chat;
