import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { addToDb } from '../fakedb/fakedb';

function Login({ setUser }) {
    const [loginData, setLoginData] = useState({})
    const navigation = useNavigate();
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }

    const handleLoginSubmit = (e) => {
        const newLoginData = { email: loginData.email.toLowerCase(), password: loginData.password }

        fetch('https://product-assignment.herokuapp.com/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newLoginData)

        })
            .then(res => res.json())
            .then(data => {

                if (data.message === 'success') {
                    // alert('success')
                    addToDb(loginData.email)
                    setUser(loginData.email)
                    navigation('/')
                } else {
                    alert('failed')
                }
            })
        e.preventDefault();
    }
    return (
        <div className='container'>
            <div style={{ marginTop: '150px' }}>
                <div >

                    <h1>Login</h1>

                    <form onSubmit={handleLoginSubmit}>
                        <input className='inputBox'
                            required
                            placeholder="Your Email"
                            variant="standard"
                            name='email'
                            onBlur={handleOnBlur}
                        />

                        <input
                            className='inputBox'
                            required
                            type='password'
                            placeholder="Your Password"
                            variant="standard"
                            name='password'
                            onBlur={handleOnBlur}
                        />
                        <br />
                        <button
                            className='btn btn-primary'
                            type='submit'
                        >Login</button>

                    </form>
                    <br />
                    <br />
                    Don't have an account? <NavLink to='/register'>Create an account</NavLink>

                </div>
            </div>
        </div>

    )
}

export default Login