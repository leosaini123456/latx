import React from "react";
import { Link } from "react-router-dom";
import "./coursecards.css";
import cardData from "./courseData";


function card(val)
{
   return(     
        <div className="coursebox">
            <div className="courseboximg">
                <h2>{val.title}</h2>
            </div>
            <h3 className="coursetitle">{val.title}</h3>
            <p className="Coursecardcontent">
                Duration : {val.duration}
                <br />
                Project : {val.project}
            </p>
            <div className="coursecardlink">
                <Link to="/">
                    View More
                </Link>
            </div>        
        </div> 
   );
}
function Webdevelopment()
{

  
    return(
        <div className="courseCard">
        {cardData.map(card)}
        </div>
    );  
}
export default Webdevelopment;