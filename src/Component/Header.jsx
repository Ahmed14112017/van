import React from "react";
import { Link, NavLink } from "react-router-dom";
import { IoLogIn } from "react-icons/io5";

export default function Headers(){
  // const style={
  //   fontWeight: "bold",
  //    textDecoration: "underline",
  //    color: "#161616"
  // }
    return(
     
        <header>
    <Link className='logo' to="/">#VanLife </Link>
    <nav className='navbar'>
      <NavLink className={({isActive})=>isActive?"nav-active":null} to="/">Home</NavLink>
      {/* <NavLink style={({isActive})=>isActive?style:null} to="/">Home</NavLink> */}
      <NavLink className={({isActive})=>isActive?"nav-active":null} to="/Host">Host</NavLink>
      <NavLink className={({isActive})=>isActive?"nav-active":null} to="/About">About</NavLink>
      <NavLink className={({isActive})=>isActive?"nav-active":null} to="/Vans">Vans</NavLink>
      <Link to="login" className="login-link">
      <IoLogIn />

                </Link>
    </nav>
    </header>
       
    )
}