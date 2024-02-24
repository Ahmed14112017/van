import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function Login(){
    const [Datafrom, setDatafrom]= useState({
        email:"",
        password:""
    });
    const loctaion =useLocation();
    console.log(loctaion)

    function handelchang(e){
       
        setDatafrom(prevstate=>{
            return(
                {
                    ...prevstate,
                    [e.target.name]:e.target.value
                }
            )
        })
    }
    
    function handelSubmitte(e){
        e.preventDefault();
    }
    
    return(
        <div className="login-container">
            {loctaion.state?<h3>{loctaion.state.message}</h3>:null}
            
            <h1>Sign in to your account</h1>
           
            <form onSubmit={handelSubmitte} className="form-group"> 
            <input type="email" placeholder="email" onChange={handelchang} value={Datafrom.email} name="email" />
            <input type="password" placeholder="password" onChange={handelchang} value={Datafrom.password} name="password" />
            <button>login</button>
            </form>
            
            

        </div>
    )
}