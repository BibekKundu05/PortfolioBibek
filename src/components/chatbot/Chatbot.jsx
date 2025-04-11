import React, { useState, useEffect } from "react";
import "./chatbot.css";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import img from "../../assets/profile-img3.png";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
  Avatar
} from "@chatscope/chat-ui-kit-react";
import axios from "axios";
import {BsWechat} from 'react-icons/bs';
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

const Chatbot = () => {
  const chat_history = [];

  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm AI Version of Rohit Raj (Currently in Beta)! Ask me anything!",
      sentTime: "just now",
      sender: "ChatGPT",
    },
  ]);

  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (message) => {
    // console.log("message: " + message);
    const newMessage = {
      message,
      direction: "outgoing",
      sender: "user",
    };
    const newMessages = [...messages, newMessage];
    setMessages(newMessages);
    setIsTyping(true);

    const apiURL = "https://starfish-app-uofxe.ondigitalocean.app/api/chatbot";

    await axios
      .post(apiURL, {
        query: message,
        history: chat_history,
      })
      .then((response) => {
        // console.log("meaw" + response.data);
        setMessages([
          ...newMessages,
          {
            message: response.data.response,
            sender: "ChatGPT",
          },
        ]);
        chat_history.push([message, response.data.response]);
        // console.log("hi" + chat_history);
        setIsTyping(false);
      });
  };

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    document.documentElement.style.overflow = 'hidden'
    console.log("hovered");
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    document.documentElement.style.overflow = 'auto';
  };

  const [isVisible, setIsVisible] = useState(false);

  var x='500px';


  return (
    <div className="botx">

    <div className={`chatbot ${isVisible?'show':''}`}>
      <div className="head">
        <div className="title"><img src={img} className="imgx"></img><div className="namex">VIRTUAL ROHIT</div></div>
        <div className="close" onClick={()=>setIsVisible(!isVisible)}>x</div>
      </div>
      <MainContainer
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <ChatContainer style={{
          height: `${isVisible?'500px':'0'}`,
          transition: 'height 1s ease-in-out',
        }}>
          <MessageList
            scrollBehavior="smooth"
            typingIndicator={
              isTyping ? (
                <TypingIndicator content="Virtual Rohit is typing"/>
              ) : null
            }
          >
            {messages.map((message, i) => {
              return (
                <>
                  {message.message.toLowerCase().includes('contact me')&&
                  <a href="#contact" className="diva">
                    <Message key={i} model={message}>
                      {message.sender==='ChatGPT'&&<Avatar src={img} name="Rohit" style={{width: '5px', height:'10px'}}/>} 
                    </Message>
                  </a>
                  }
                    <Message key={i} model={message}>
                      {message.sender==='ChatGPT'&&<Avatar src={img} name="Rohit" style={{width: '5px', height:'10px'}}/>} 
                    </Message>
              </>)
            })}
          </MessageList>
          <MessageInput placeholder="Type message here" onSend={handleSend} />
        </ChatContainer>
      </MainContainer>
    </div>
    <div className={`chatbot-icon`} ><div className="chaticon" onClick={()=>setIsVisible(!isVisible)}><BsWechat/></div></div>
    </div>
  );
};

export default Chatbot;
