import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const handleSignup = () => {
        console.log('Username:', username);
        console.log('Password:', password);

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(username)) {
           // setIsValid(false);
           alert('Please enter a valid email address.');
           return 0
        } 
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
        if (!passwordRegex.test(password)) {
         
          alert(' please enter a strong Password !');
          return 0
        }

        const userValue = {
            username,
            password: password
        }

        const jsonData = JSON.stringify(userValue)
        console.log(jsonData)
        localStorage.setItem('userValue', jsonData)


        navigate('/login')

    };

    return (
        <div>
            <h2>Signup</h2>
            <div>
                <label>Username:</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button onClick={handleSignup}>Signup</button>
        </div>
    )
}

export default Signup