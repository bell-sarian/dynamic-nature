import React, { Component, useState } from "react";
import styles from './Sun.css';

export default function Sun(props)  {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };


  const stylesHover = {

  }
  
  return (
      <div 
        className="sun" 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          backgroundColor: props.blockColor, 
          opacity: isHovering ? .80 : 1,
          transition: "opacity .7s", 
          height: props.blockHeight, 
          width: props.blockWidth, 
          zIndex: 9999, 
          display: "flex", 
          flexDirection: "row" 
        }}
        ></div>
  );
  
}

