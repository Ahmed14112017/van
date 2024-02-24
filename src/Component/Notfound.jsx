import React from "react";
import { Link } from "react-router-dom";

export default function Notfound(){
    return(
        <div>
             <h1>Sorry, the page you were looking for was not found.</h1>
            {/* <button onClick={()=>{window.location="/"}}>Go to Home Page</button> */}
            <Link to="/">Go to Home Page</Link>
        </div>
    )
}