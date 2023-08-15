import React from "react";
import { useState } from "react";
import img from "../../../public/images/LoginLogo.png";
import "./Login.css";


const LoginPage = ()=>{

    const [data,setData]=useState(["Login","Create a New Account","Password"]);

    return (
        <div className="login-parent">
            <div className="login-card">
                <div className="image-container">
                    <img className="image" src={img} alt="Login" />
                </div>
                <input className="input" type="text" placeholder="Username" />
                <input className="input" type="password" placeholder={data[2]} />

                
                <button className="btn btn1">{data[0]}</button>
                <p>OR</p>
                <button className="btn btn2" onClick={()=>{
                    if(data[0]=="Login"){
                        setData(["Sign Up","Already have an account","Create Password"]);
                    }
                    else setData(["Login","Create a New Account","Password"]);
                }}>{data[1]}</button>
            </div>
        </div>
    )
};

export default LoginPage;