import { useState } from "react";
import axios from "axios";

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = { 'Project-ID':"6796ca9f-301a-4529-935a-f32f64cb1955", 'User-Name': username, 'User-Secret': password }

        try {
           await axios.get('https://api.chatengine.io/chats', {headers: authObject});

           localStorage.setItem('username', username);
           localStorage.setItem('password', password);

           window.location.reload();

        } catch (error) {
            setError('Ooops, incorrect credentials')
            
        }
    
    }


    return(
        <div className="wrapper">
            <div className="form">
                <h1 className="title">myChat App</h1>
                <form onSubmit={handleSubmit}>
                        <input type="text" onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
                        <input type="password" onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;