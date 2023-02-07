import React, { Component, useState } from "react";

export default function Block(props)  {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const styles = {

  }

  const stylesHover = {

  }
  
  return (
      <div 
        className="block" 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          backgroundColor: props.blockColor, 
          opacity: isHovering ? .90 : 1,
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

