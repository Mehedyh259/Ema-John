import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './SignUp.css';
const SignUp = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur = (event) => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = (event) => {
        setPassword(event.target.value)
    }
    const handleConfirmPasswordBlur = (event) => {
        setConfirmPassword(event.target.value)
    }
    if (user) {
        navigate('/inventory');
    }
    const handleCreateUser = (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('confirm password did not match !');
            return;
        }
        if (password.length < 6) {
            setError('password must be 6 or more charecter');
            return;
        }
        createUserWithEmailAndPassword(email, password);

    }


    return (
        <div className='form-container'>

            <div>
                <h2 className="form-title">Sign Up</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="inputs-group">
                        <label className='input-label' htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="" id="" required />
                    </div>
                    <div className="inputs-group">
                        <label className='input-label' htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <div className="inputs-group">
                        <label className='input-label' htmlFor="confirm-password">Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <input type="submit" value='Sign Up' className="form-submit" />
                </form>
                <p>Already have an account? <Link to='/signup' className="form-link">Login</Link> </p>
            </div>
        </div>
    );
};

export default SignUp;