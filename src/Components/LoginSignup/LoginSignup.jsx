import React, { useState } from "react";
import './LoginSignup.css'

import Company_icon from '../Assets/company_icon.png'
import user_icon from '../Assets/person_icon.png'
import email_icon from '../Assets/email_icon.png'
import password_icon from '../Assets/password_icon.png'
import partnership_icon from '../Assets/partnership_icon.png'

const LoginSignup1=()=>{
    return(
        <div className="background_icon">
            <img src={partnership_icon} alt=""/>
      </div>
    )

}
const LoginSignup = () => { 
    const[action,setAction]=useState("Sign Up");
return (
    
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action==="Login"?<div></div>:<div className="input">
                <img src={Company_icon} alt=""/>
                <input type="text" placeholder="Company name"/>
            </div>}
            {action==="Login"?<div></div>:<div className="input">
                <img src={user_icon} alt=""/>
                <input type="text" placeholder="Owner name"/>
            </div>}
        
            <div className="input">
                <img src={email_icon} alt=""/>
                <input type="email" placeholder="Email"/>
            </div>
            <div className="input">
              <img src={password_icon} alt=""/>
                <input type="password" placeholder="Password"/>
            </div>
            {action==="Login"?<div></div>:  <div className="input">
                <img src={password_icon} alt=""/>
                <input type="password" placeholder="Confirm Password" />
            </div>}
        </div>
        {action==="Sign Up"?<div></div>: <div className="forgot-password">Lost Password?<span>Click Here!</span></div>}
        
        <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit"}onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"}onClick={()=>{setAction("Login")}}>Login</div>

        </div>
    </div>
)
}
export  {LoginSignup,LoginSignup1};