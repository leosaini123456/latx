import React from "react";
import { Link } from "react-router-dom";
import "./mainbanner.css";
import Advacetab from "./Advacetab";
import WhyChooseUs from "../Common/WhyChooseUs";
function MainBanner()
{
    return(
        <>
        <section className="section1">
            <div className="row">
                <div className="col-lg-6">
                        <h2>LEARN AT HOME AND SHAPE <br /> YOUR FUTURE WITH <br /> <span className="Highlight">LATX TECHNOLOGIES</span> </h2> 
                        <p>Get trained and certified in the most burgeoning technologies of the industry</p>
                        <Link className="mainLink" to="/course">Explore Our Programs</Link>
                </div>
                <div className="col-lg-6 mainbox">
                <img className="firstimg" src="img/hero.png" alt="" width="400px"/>
                <img className="backimg" src="img/hero-shape-purple.png" alt="" width="500px" />
                <img className="dotimg" src="img/hero-1-dot.png" alt="" width="100px" />
                <img className="smallbannerimg" src="img/hero-sm-1.jpg" alt="" width="150px" /> 
                
                </div>
            </div>
        </section>

        <section className="section2">
            <div className="row">
                <div className="col-lg-4">
                    <div className="box">
                        <p>
                        <b>Become A</b> <br />
                        Software Developer
                        </p>
                        <Link to="/">
                            Read More >
                        </Link>
                    </div>
                </div>
                <div className="col-lg-4">
                <div className="box">
                        <p>
                        <b>Become A</b> <br />
                        Full Stack Web Developer
                        </p>
                        <Link to="/">
                            Read More >
                        </Link>
                    </div>
                </div>
                <div className="col-lg-4">
                <div className="box">
                        <p>
                        <b>Become A</b> <br />
                        Graphic Designer
                        </p>
                        <Link to="/">
                            Read More >
                        </Link>
                    </div>
                </div>
            </div>
        </section>

        <section className="section3">
            <div className="container">
            <h2 className="section3Title">Trending <span className="Highlight">Course</span></h2>
            <Advacetab />
            <div className="bottomLink"> 
                <Link className="mainLink" to="/course">View All Courses</Link>
            </div>
            </div>
            
        </section>

        <section className="section4">
            <div className="container">
            <WhyChooseUs />
            </div>
        </section>
        </>
    );
}
export default MainBanner;