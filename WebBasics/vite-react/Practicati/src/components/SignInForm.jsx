import { useState } from 'react';


export default function SignInForm() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function handleSubmit(event) {
        event.preventDefault()
        const credentials = { email, password }
        // Login Versuch starten...
        console.log(credentials)

        if (credentials.email == "test@test.de" && credentials.password == "123456") {
            setIsLoggedIn(true);
        }
        
        setEmail('');
        setPassword('');
        
    };

    if (isLoggedIn) {
        return (
            <h3>User is logged in!</h3>
        )
    } else {
        return (
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder='email' value={email} onChange={e => setEmail(e.target.value)} />
                <input type="password" placeholder=' password' value={password} onChange={e => setPassword(e.target.value)} />
                <button type="submit">Submit</button>
            </ form >
        );
    }
};