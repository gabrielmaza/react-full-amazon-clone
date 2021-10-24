import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase'


function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault()

        auth 
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault()

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                //It successfulle user created
                console.log(auth);
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <Link to='/'> 
                <img 
                    className="login__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1000px-Amazon_logo.svg.png' 
                />
            </Link>

            <div className="login__container">
                <h1>Sign In</h1>

                <form>
                    <label>E-mail</label>
                    <input 
                        className="login__containerInput"
                        type="text" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <label>Password</label>
                    <input 
                        className="login__containerInput" 
                        type="password" 
                        value={password} 
                        onChange={e => setPassword(e.target.value)}
                    />
                    <button 
                        className="login__signInButton"
                        type="submit"
                        onClick={signIn}
                    >Sign In</button>
                </form>

                <p>By continuing, you agree to AMAZON FAKE CLONE Conditions of Use and Privacy Notice.</p>                

                <button 
                    className="login__registerButton"
                    onClick={register}
                >Create your Amazon account</button>

            </div>
        </div>
    )
}

export default Login