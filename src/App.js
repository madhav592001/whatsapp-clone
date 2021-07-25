import './App.css';
import Sidebar from './Sidebar' ; 
import Chat from './chat'
import Pusher from 'pusher-js';
import React , { useEffect , useState } from 'react';
import axios from './axios';

function App() {

  const [messages, setMessages] = useState([]) ; 

  useEffect(()=>{
    axios.get('/messages/sync').then((response) => {
      setMessages(response.data) ; 
    });
  },[] );

  useEffect(() => {

    const pusher = new Pusher('a4aedfc443df3b71d21a', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');                 
    channel.bind('inserted', (newMessage) => {
      
      setMessages([...messages,newMessage]) ; 

      return () =>{
        channel.unbind_all() ; 
        channel.unsubscribe() ;
      } ; 

    });

  },[messages]);

  return (
    <div className="app">

      <div className="app__body">

        <Sidebar />

        <Chat messages={messages} />  

      </div>

    </div>
  );
}

export default App;
