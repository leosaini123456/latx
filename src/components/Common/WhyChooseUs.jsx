import React from "react";
import "./whychoose.css";
const data = [
    {
        img : "img/One.png",
        title : "True, Project-based Learning",
        content : "Learn Courses through an immersive project-based curriculum focused on practical developer skills."
    },
    {
        img : "img/Two.png",
        title : "True, Project-based Learning",
        content : "Learn Courses through an immersive project-based curriculum focused on practical developer skills."
    },
    {
        img : "img/Three.png",
        title : "True, Project-based Learning",
        content : "Learn Courses through an immersive project-based curriculum focused on practical developer skills."
    },
    {
        img : "img/Four.png",
        title : "True, Project-based Learning",
        content : "Learn Courses through an immersive project-based curriculum focused on practical developer skills."
    }
]
function card(val)
{
    return(
    <div className="col-lg-3">
        <div className="box">
            <img src={val.img} width="100px" />
            <h2>{val.title}</h2>
            <p>{val.content}</p>
        </div>
    </div>
    );
}
function WhyChooseUs()
{
    return(
        <>
        <h2>Why <span className="Highlight">Choose Us?</span></h2>
        <p>A Choice that makes a big difference in your career. Latx Technologies is committed to helping its students to reach their goals and their training experiences, by providing the innovative surroundings and faculties.</p>
        
        <div className="whyus">
            <div className="row">
                {data.map(card)} 
           </div>
        </div>
        
        </>
        
        
    )
}

export default WhyChooseUs;