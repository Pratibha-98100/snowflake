import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

function Login() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        email: "",
        password: ""
    });

    axios.defaults.withCredentials = true;

    const submit = (e) => {
        e.preventDefault();
        console.log(values);
        
        // Sending values to server
        axios.post("http://localhost:9000/login", values)
            .then(res => {   
                console.log(res.data);
                if (res.data.Status === "Successful") {
                    console.log("Login successful");
                    navigate("/");
                } else {
                    console.log("Login failed: ", res.data.Error);
                    alert("Login failed: " + res.data.Error);
                }
            })
            .catch(err => {
                console.error("Login error: ", err);
                alert("Login error: " + err.message);
            });
    };

    return (
        <div style={{ marginTop: "12%", width: "31%", alignItems: "center", marginLeft: "39%" }}>
            <form onSubmit={submit} style={{ height: "49vh", background: "grey", padding: "3%" }}>
                <div className='mb-3'>
                    <label style={{ marginLeft: "-79%", fontSize: "21px" }} htmlFor='email'>Email</label>
                    <input 
                        className='form-control' 
                        type='email' 
                        placeholder='Enter email' 
                        onChange={(e) => setValues({ ...values, email: e.target.value })} 
                    />
                </div>

                <div className='mb-3'>
                    <label style={{ marginLeft: "-79%", fontSize: "21px" }} htmlFor='password'>Password</label>
                    <input 
                        className='form-control' 
                        type='password' 
                        placeholder='Enter Password' 
                        onChange={(e) => setValues({ ...values, password: e.target.value })} 
                    />
                </div>

                <button className='btn btn-success' type='submit'>Login</button>
                <Link to="/signup">Don't have an account? Signup</Link>
            </form>
        </div>
    );
}

export default Login;
