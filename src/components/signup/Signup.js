import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router';
import validator from 'validator';
import './SignUp.css'

export default function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [data, setdata] = useState([]);
    const [uname, setuname] = useState('');
    const [emailId, setemailId] = useState('');
    const [pass, setpass] = useState('');

    let history = useHistory();
    function signUp() {
        if (username.includes('a')) {
            const uname = { username: username };
            setUsernameError('');
        } else {
            setUsernameError('Invalid Username');
        }
        if (validator.isEmail(email)) {
            const emailId = { email: email };
            setEmailError('');
        } else {
            setEmailError('Invalid Email');
        }
        if (password.length >= 8) {
            const pass = { password: password }
            setPasswordError('');
        } else {
            setPasswordError('Invalid Password')
        }
        const allEntry = { Uname: uname, Email: emailId, Pass: pass };
        setdata(allEntry);
        // history.push('/login');
    }

    return (
        <div className="div1">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-4">
                        <h2 className="text-center">Sign Up</h2>
                        <div className="mb-2">
                            <input type="text" onChange={(e) => setUsername(e.target.value)} className="form-control" placeholder="Username" />
                        </div>
                        <p style={{ color: 'red', fontSize: '10pt' }}>{usernameError}</p>
                        <div className="mb-2">
                            <input type="text" onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Email" />
                        </div>
                        <p style={{ color: 'red', fontSize: '10pt' }}>{emailError}</p>
                        <div className="mb-2">
                            <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Password" />
                        </div>
                        <p style={{ color: 'red', fontSize: '10pt' }}>{passwordError}</p>
                        <div className="mb-2">
                            <button className="btn btn-success" type="button" onClick={signUp}>SignUp</button>
                        </div>
                        <div class="separtor">or</div>
                        <div class="social-media-icons">
                            <a href=""><i class="fab fa-facebook-f"></i></a>
                            <a href=""><i class="fab fa-google"></i></a>
                            <a href=""><i class="fab fa-twitter"></i></a>
                            <a href=""><i class="fab fa-linkedin-in"></i></a>
                        </div>
                        <div class="signup-text">
                            <p>Not a member? <a href="#">Sign up now</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

