import React, { useState } from "react";
import "./login.css";
import Logo from "../../assets/currease logo.png";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        console.log(email);
    };
    const handlePassChange = (e) => {
        setPassword(e.target.value);
        console.log(password);
    };

    return (
        <div className="login-page">
            <div className="logo">
                <img src={Logo} alt="currease" />
            </div>

            <div className="form-container">
                <form className="login-form">
                    <h2>Log In</h2>
                    <div className="input-wrap">
                        <label htmlFor="">Email</label>
                        <input type="email" onChange={handleEmailChange} />
                    </div>
                    <div className="input-wrap">
                        <label htmlFor="">Password</label>
                        <input type="password" onChange={handlePassChange} />
                    </div>

                    <button className="btn-signin">Sign In</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
