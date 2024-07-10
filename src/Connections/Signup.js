import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function Signup() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    });

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Sending values to server
        axios.post('http://localhost:9000/signup', values)
            .then(res => {
                if (res.data.Status === 'Successful') { // Assuming the server responds with "Successful"
                    console.log('Signup successful');
                    navigate('/login'); // Redirect to login page upon successful signup
                } else {
                    console.log('Signup failed');
                    // Handle unsuccessful signup (e.g., display error message)
                }
            })
            .catch(err => {
                console.error('Signup error:', err);
                // Handle error (e.g., display error message)
            });
    };

    return (
        <div style={{ marginTop: '12%', width: '31%', alignItems: 'center', marginLeft: '39%' }}>
            <form onSubmit={handleSubmit} style={{ height: '49vh', background: 'grey', padding: '3%' }}>
                <div className='mb'>
                    <label style={{ marginLeft: '-79%', fontSize: '21px' }} htmlFor='name'>
                        Name
                    </label>
                    <input
                        className='form-control'
                        type='text'
                        placeholder='Enter name'
                        value={values.name}
                        onChange={(e) => setValues({ ...values, name: e.target.value })}
                    />
                </div>

                <div className='mb-3'>
                    <label style={{ marginLeft: '-79%', fontSize: '21px' }} htmlFor='email'>
                        Email
                    </label>
                    <input
                        className='form-control'
                        type='email'
                        placeholder='Enter email'
                        value={values.email}
                        onChange={(e) => setValues({ ...values, email: e.target.value })}
                    />
                </div>

                <div className='mb-3'>
                    <label style={{ marginLeft: '-79%', fontSize: '21px' }} htmlFor='password'>
                        Password
                    </label>
                    <input
                        className='form-control'
                        type='password'
                        placeholder='Enter Password'
                        value={values.password}
                        onChange={(e) => setValues({ ...values, password: e.target.value })}
                    />
                </div>

                <button className='btn btn-success' type='submit'>
                    Signup
                </button>
                <Link to='/login'>Already have an account? Login</Link>
            </form>
        </div>
    );
}

export default Signup;
