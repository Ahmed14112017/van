import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function AuthRequired(){
    const authRequired =false
    if(authRequired){
        return <Navigate to="/Login" state={{message: "You must log in first"}} />
    }return <Outlet />
}