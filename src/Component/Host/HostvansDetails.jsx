import React, { useEffect, useState  } from "react";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";
import Data from "../Data";
export default function HostvansDetails(){
    const[details, setDetails] = useState(Data);
    const [currentvan,Setcurrentvan]=useState(null)
    const param=useParams()
    console.log("param",param);
    useEffect(()=>{
        const vanid=details.find((e)=>{
            return(
                e.id==param.id
            )
           
        })
        Setcurrentvan(vanid)
        
    },[param])
console.log(currentvan)




    return(
        <section className="hostvansdetails-section">
            <Link to=".." relative="path" className="back-button"><FaLongArrowAltLeft className="react-icons" />
<span>Back to all vans</span> </Link>
            {currentvan&&(
                <div className="hostvansdetails-content">
                    <img src={currentvan.imageUrl} />
                    <div>
                        <span className={`item-type ${currentvan.type} selected`}>{currentvan.type}</span>
                        <h3>{currentvan.name}</h3>
                        <span>${currentvan.price}/day</span>

                        </div>
                </div>
            )}
            <nav className="hostvansdetails-navigation">
                <NavLink to="." end className={({isActive})=>isActive?"nav-active":null} >Details</NavLink>
                <NavLink to="Pricing"className={({isActive})=>isActive?"nav-active":null}>Pricing</NavLink>
                <NavLink to="Photo"className={({isActive})=>isActive?"nav-active":null}>Photo</NavLink>
            </nav>
            <Outlet context={{currentvan}} />
            
        </section>
    )
    }