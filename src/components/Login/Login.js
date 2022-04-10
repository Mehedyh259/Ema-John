import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleEmailBlur = (event) => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = (event) => {
        setPassword(event.target.value)
    }


    if (user) {
        navigate('/shop')
    }

    const handleLoginUser = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    return (
        <div className='form-container'>

            <div>
                <h2 className="form-title">Login</h2>
                <form onSubmit={handleLoginUser}>
                    <div className="inputs-group">
                        <label className='input-label' htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="" id="" required />
                    </div>
                    <div className="inputs-group">
                        <label className='input-label' htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{error?.message}</p>
                    {
                        loading && <p>Loading....</p>
                    }
                    <input type="submit" value='Login' className="form-submit" />
                </form>
                <p>New to Ema-John? <Link to='/signup' className="form-link">Create an account</Link> </p>
            </div>
        </div>
    );
};

export default Login;