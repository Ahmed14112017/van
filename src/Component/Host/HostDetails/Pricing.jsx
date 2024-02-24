import React from "react";
import { useOutletContext } from "react-router-dom";
export default function Pricing(){
    const context = useOutletContext();
    const vans= context.currentvan
    return(
        <div>{vans?(
            <div className="price-content">
                <h3>${vans.price}/day</h3>
                </div>
        ):null}
            

        </div>
        
    )
}