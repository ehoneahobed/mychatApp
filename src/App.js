import { ChatEngine} from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

const App = () => {
  if(!localStorage.getItem('username')) return <LoginForm />

  return (
    // <ChatEngine
		// 	height='100vh'
		// 	userName='ehoneahobed'
		// 	userSecret='_2021Ehonq2'
		// 	projectID='6796ca9f-301a-4529-935a-f32f64cb1955'
		// />
    
    <ChatEngine 
      height = "100vh"
      projectID = "6796ca9f-301a-4529-935a-f32f64cb1955"
      userName = {localStorage.getItem('username')}
      userSecret = {localStorage.getItem('password')}
      renderChatFeed = {(ChatAppProps) => <ChatFeed {...ChatAppProps} />}
    />
  );
}

export default App;
