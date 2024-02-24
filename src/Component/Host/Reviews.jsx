import React from "react"
import myimg from "../image/Group314.png"
import { ImStarEmpty } from "react-icons/im";


export default function Reviews() {
    // const img = require(`${myimg}`)
    const reviewsData = [
        {
            rating: 5,
            name: "Elliot",
            date: "January 3, 2023",
            text: "The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
            id: "1",
        },
        {
            rating: 5,
            name: "Sandy",
            date: "December 12, 2022",
            text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
            id: "2",
        },
    ]
    const aa=reviewsData.map((item)=>{
        return(
            <div key={item.id} className="review-container">
                {[...Array(item.rating)].map((_, i) => (
        <ImStarEmpty className="review-star" key={i}  />
      ))}
                <div className="review-item">
                <h4>{item.name}</h4>
                <span>{item.date}</span>
                </div>
               
                <p>{item.text}</p>
                <hr></hr>
            </div>
        )
    })
    return (
        <section className="host-review">
        <div className="text">
        <h2>Your reviews </h2>
            <p>Last<span> 30 days</span></p> 
        </div>
        <img src={myimg} alt="review" />
        <h3>Reviews (2)</h3>
        {aa}
        
        </section>
    )
}