import React from "react";
import './House.css';
export default function House(props)  {

    console.log("house")
  
  return (
      <div className="house-container">
            <div className="house">
            <div className="door"></div>
            <div className='window'></div>
            </div>  
      </div>
  );
  
}

