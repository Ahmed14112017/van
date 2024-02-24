import React, { useState } from "react";
import { Link } from "react-router-dom";
import {FaLongArrowAltLeft} from "react-icons/fa";
import {useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Data from "./Data";
export default function VanDetail(){
    const[data ,Setdata]=useState(Data)
    const param=useParams()
    console.log(param)
    const alldata=data.find(x=>x.id===param.id)
    console.log(alldata)
    const location=useLocation()
    console.log(location)
    const show=location.state?location.state.search:"";
    const typeitem=location.state?location.state.type:"allvans";        
    console.log(show)
    return(
        <div className="vanDetails-container">
            <Link to={`..${show}`} relative="path" className="back-button"><FaLongArrowAltLeft className="react-icons" />
            <span>Back to {typeitem}</span> </Link>
           {alldata?
           (<div className="vanDetails-content">
           <img src={alldata.imageUrl} />
           <div>
           <button className={`item-type ${alldata.type} selected`}>{alldata.type}</button>
                <h3>{alldata.name}</h3>
                <p className="vanDetails-price">${alldata.price}<span>/day</span></p>
                <p className="vanDetails-description">{alldata.description}</p>
                <button className="link-button">Rent this van</button>
            </div>
           
            
           </div>):<h1>Loading......</h1>}
                
                
        </div>
    )
}