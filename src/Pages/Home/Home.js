import React from "react";
import './Home.css';


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
        <div>
          <h1>Dynamic <br/> web-based art.</h1>
        </div>
        <div className="home-welcome-button">
          <button>BROWSE WORK</button>
        </div>
      </div>
      
      {/* Section 2 */}
      <div className="home-content-container2">
        <div>
          {/* <p>Section 2</p> */}
        </div>
      </div>
    </div>
    


  )
}