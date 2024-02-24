import React, { useEffect, useState } from "react";
import Data from "./Data";
import { Link, useSearchParams } from "react-router-dom";

export default function Van(){
    const [vanData,SetvanData]=useState(Data)
    const [searchparam,Setsearchparam]=useSearchParams()
    const searchtype=searchparam.get("type")
    console.log(searchparam.toString())
    const selectoption=searchtype?vanData.filter((sel=>{
        return(
            sel.type===searchtype
        )
    })):vanData;
    console.log(selectoption);

    const getData=selectoption.map((item)=>{
        return(
            <div key={item.id} className="van-tile">
                <Link to={`/vans/${item.id}`} state={{search: `?${searchparam.toString()}`,type:searchtype}}>
                <img src={item.imageUrl} />
            <div className="van-info">
                <h3>{item.name}</h3>
                <p>${item.price}<span>/day</span></p>
            </div>
            <button className={`item-type ${item.type} selected`}>{item.type}</button>
                </Link>
            
        </div>
        )
    })
    console.log(vanData)
    // function handelchange(key,value){
    //     const aa=new URLSearchParams(searchparam)
    //     if(value===null){
    //         aa.delete(key)
    //     }else{
    //         aa.set(key,value)
    //     }
    //     return `?${aa.toString()}`

    // }
    function handelchange(key,value){
        Setsearchparam(prevstate=>{
            if(value==="null"){
                prevstate.delete(key)
            }else{
                prevstate.set(key,value)
            }
            return prevstate
        })
    }
    return(
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="filter-container">
            {/* <Link  to="?type=simple" className="item-type simple selected">simple</Link>
            <Link to="?type=rugged" className="item-type rugged selected">rugged</Link>
            <Link to="?type=luxury" className="item-type luxury selected">luxury</Link>
            <Link to="." className="item-type luxury">Clear Filter</Link> */}
            <button  onClick={()=>Setsearchparam("type=simple")} className="item-type simple selected">simple</button>
             <button  onClick={()=>Setsearchparam("type=rugged")}className="item-type rugged selected">rugged</button>
             <button  onClick={()=>Setsearchparam("type=luxury")}className="item-type luxury selected">luxury</button>
             <button  onClick={()=>Setsearchparam(".")}className="item-type luxury selected">Clear Filter</button>
             {/* <Link to={handelchange("type","simple")} className="item-type simple selected">simple</Link>
             <Link to={handelchange("type","rugged")} className="item-type rugged selected">rugged</Link>
             <Link to={handelchange("type","luxury")} className="item-type luxury selected">luxury</Link>
             <Link to={handelchange("type","null")} className="item-type">Clear Filter</Link> */}
    {/* <button onClick={()=>handelchange("type","simple")} className="className="item-type simple selected>simple</button>
    <button onClick={()=>handelchange("type","rugged")} className="className="item-type rugged selected>rugged</button>
    <button onClick={()=>handelchange("type","luxury")} className="className="item-type luxury selected>luxury</button>
    {searchtype?<button onClick={()=>handelchange("type","null")} className="className="item-type simple selected>Clear Filter</button>:null} */}
            </div> 
<div className="van">
{getData}
        </div>
        </div>
        
    )
}