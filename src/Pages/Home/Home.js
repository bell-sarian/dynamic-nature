import React from "react";
import { Link } from 'react-router-dom'
import WorkLinkData from "../../Assets/data/WorkLink";
import LinkTile from "../../Components/LinkTile/LinkTile";
import './Home.scss';




export default function Home() {

  return (
    <div className="home-container">
      <div class="animation-container">
        <div class="shape1"></div>
        <div class="shape2"></div>
        <div class="shape3"></div>
        <div class="shape4"></div>
        <div class="shape5"></div>
        <div class="shape6"></div>
        <div class="shape7"></div>
      </div>

      {/* Section 1 */}
      <div className="home-welcome-container">
      <div className="home-welcome-container-preface-text">
          <div>GRAPHICS, UI/UX DESIGN, CREATIVE DIRECTION, AND ENGINEERING BY VSW COLLECTION ORIGIN FEBRUARY 2023. </div>
        </div>
        <div className="home-welcome-container-text">
          <h1>DYNAMIC WEB-BASED ART BY ARTIST BSW IN LOS ANGELES, CA. ALL GRAPHICS ARE ENGINEERED USING ONLY JS/HTML/CSS. </h1>
        </div>
          <Link to="/work" className="home-content-view-more-button" >
            <div>Browse Work</div>
          </Link>
      </div>
      
      {/* Section 2 */}
      <div className="home-content-container2">
        <h1> Recent Work</h1>

        <div className="home-content-container2-links" > 
          {WorkLinkData.map((item, index) => {
              return (
                  <LinkTile key={index} title={item.title} image={item.image} link={item.link} />
              )
          })}
        </div>
        <Link to="/work" className="home-content-view-more-button" >
            <div>View More</div>          
        </Link>
      </div>
    </div>
    


  )
}