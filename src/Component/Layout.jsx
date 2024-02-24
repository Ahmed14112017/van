import React from "react";
import { Outlet } from "react-router-dom";
import Headers from "./Header";
import Footer from "./Footer";
export default function Layout(){
    return(
        <>

         <Headers/>
        <Outlet />
        <Footer/>
        
        </>
    )
}