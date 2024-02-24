import React from "react";
import { useOutletContext } from "react-router-dom";
export default function Photo(){
    const{currentvan}=useOutletContext();

    return(
        <div className="photo-content">
            {currentvan&&<img src={currentvan.imageUrl} />}
        </div>
        
    )
}