import React from "react";
import { useOutletContext } from "react-router-dom";
export default function Details(){
    const {currentvan} = useOutletContext()
    
    console.log(currentvan)
    return(
        <div>
            {currentvan?(
                <div className="details-content">
                    <h4>Name: <span>{currentvan.name}</span></h4>
                    <h4>Catogery: <span>{currentvan.type}</span></h4>
                    <h4>Description: <span>{currentvan.description}</span></h4>
                    <h4>Visibility: <span>Public</span></h4>
                </div>
            ):null}
        </div>
       
    )
}