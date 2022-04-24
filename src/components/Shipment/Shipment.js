import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Shipment = () => {
    const navigate = useNavigate();

    const [user] = useAuthState(auth);

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');


    const handleNameBlur = (event) => {
        setName(event.target.value)
    }
    const handleAddressBlur = (event) => {
        setAddress(event.target.value)
    }
    const handlePhonesBlur = (event) => {
        setPhone(event.target.value)
    }


    const handleCreateUser = (event) => {
        event.preventDefault();
        const shipping = { name, email: user.email, address, phone };
        console.log(shipping);

    }

    return (
        <div className='form-container'>

            <div>
                <h2 className="form-title">Shipping Information</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="inputs-group">
                        <label className='input-label' htmlFor="name">Your Name</label>
                        <input onBlur={handleNameBlur} type="text" name="name" id="" required />
                    </div>
                    <div className="inputs-group">
                        <label className='input-label' htmlFor="email">Your Email</label>
                        <input value={user?.email} readOnly type="email" name="email" id="" required />
                    </div>
                    <div className="inputs-group">
                        <label className='input-label' htmlFor="address">Address</label>
                        <input onBlur={handleAddressBlur} type="text" name="address" id="" required />
                    </div>
                    <div className="inputs-group">
                        <label className='input-label' htmlFor="phone">Phone Number</label>
                        <input onBlur={handlePhonesBlur} type="text" name="phone" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <input type="submit" value='Add Shipment' className="form-submit" />
                </form>
            </div>
        </div>
    );

};

export default Shipment;