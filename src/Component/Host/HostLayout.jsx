import React from "react"
import { Link,NavLink,Outlet } from "react-router-dom"

export default function HostLayout() {
    const hoststyle={
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    return (
        <>
        <nav className="host-nav">
        <NavLink end style={({isActive})=>isActive?hoststyle:null} to="/Host">Dashboard</NavLink>
        <NavLink style={({isActive})=>isActive?hoststyle:null}to="/Host/Income">Income</NavLink>
        <NavLink style={({isActive})=>isActive?hoststyle:null}to="/Host/Reviews">Reviews</NavLink>
        <NavLink style={({isActive})=>isActive?hoststyle:null}to="/Host/vans">vans</NavLink>
        </nav>
        <Outlet />
        </>
        
    )
}