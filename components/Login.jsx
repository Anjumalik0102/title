import React, { useState } from "react"
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    console.log(localStorage)
    const handleLogin =async () => {
        // Here you can implement your login logic, like sending a request to the server
        // For simplicity, I'm just logging the username and password
        console.log('Username:', username);
        console.log('Password:', password);

       const userData = await localStorage.getItem('userValue')
       if(userData){
        const parsedUserData = JSON.parse(userData)
        console.log(parsedUserData)
        if(parsedUserData.username === username && parsedUserData.password == password ){
          console.log(parsedUserData)
  
          localStorage.setItem('userLogedIn','true')
          navigate('/Home')
  
        }else{
          alert('invalid username or password')
        }
       }else{
        alert('user not found please signup')
       }
      
    
        // Once login is successful, you can call the onLogin function passed from the parent component
      };

    return (
        <>
            <div>
                <h2>Login</h2>
                <div>
                    <label>Username:</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button onClick={handleLogin}>Login</button>
            </div>
        </>
    )
}

export default Login