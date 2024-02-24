import React, { useState } from "react";
import Data from "../Data";
import { Link } from "react-router-dom";
export default function Hostvans(){
const [vandata,Setvandata]=useState(Data)

const handeldata=vandata.map((item)=>{
    return(
        <Link  to={`/Host/vans/${item.id}`} key={item.id} className="hostvan-details"> 
        <div className="hostvan-img">
        <img src={item.imageUrl} />
            <div>
            <h3>{item.name}</h3>
            <span>${item.price}/day</span>
            </div>
            
        </div>
        </Link>
    )
})
    return(
        <div className="host-Vanlist">
            <h1>Host Vans List Page</h1>

            <div className="hostvan-item" >
            {vandata?(
                <section>
                {handeldata}
                </section>
                
            ):(
                <h1>Loading</h1>
            )
                }
            </div>
        </div>
        
    )
}