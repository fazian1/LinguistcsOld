import { ChatEngine } from 'react-chat-engine';
import LoginChatForStudent from "./LoginChatForStudent";

import ChatFeed from '../../../../Views/Syntics Chat/ChatFeed'
//import './App.css';


function ChatWindowForStudent() {
    
    const projectID = 'e65fc003-4b11-47a9-84e9-72a212dc728e';
    if (!localStorage.getItem('usernameStudent')) return <LoginChatForStudent />;

    return (
      <ChatEngine
        height="100vh"
        projectID={projectID}
        userName={localStorage.getItem('usernameStudent')}
        userSecret={localStorage.getItem('passwordStudent')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
      />
    );
  };

export default ChatWindowForStudent
