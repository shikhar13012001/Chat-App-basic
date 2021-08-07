 import {ChatEngine} from 'react-chat-engine'
import React from 'react'
 import './App.css';
 import  ChatFeed  from './components/ChatFeed.component.jsx';
import LoginForm from './components/login-form.component';
 const App=()=>{
     if(!localStorage.getItem('username')) return <LoginForm/>
     return (
        <ChatEngine 
            height="100vh"
            projectID="4df238fe-76d0-4dd5-b0ca-b72ffe9b11c8"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}  />}
        />)
 }
 export default App;