import React, { Component, useState } from "react";
import styles from "./Block.css";

export default function Block(props)  {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const ColorLuminance = (hex, lum) => {

    // validate hex string
    hex = String(hex).replace(/[^0-9a-f]/gi, '');
    if (hex.length < 6) {
      hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
    }
    lum = lum || 0;
  
    // convert to decimal and change luminosity
    var rgb = "#", c, i;
    for (i = 0; i < 3; i++) {
      c = parseInt(hex.substr(i*2,2), 16);
      c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
      rgb += ("00"+c).substr(c.length);
    }
  
    return rgb;
  }

  let styleSheet = document.styleSheets[0];

  let animationName = `pulse-${props.blockNumber}-${props.blockSubNumber}`;
  console.log(animationName)

  let keyframes =
    `@-webkit-keyframes ${animationName} {
        0%   { background-color: ${props.blockColor}; }
        25%  { background-color: ${ColorLuminance(props.blockColor, .25)} }
        50%  { background-color: ${ColorLuminance(props.blockColor, .4)}}
        75%  { background-color: ${ColorLuminance(props.blockColor, .55)} }
        100% { background-color: ${props.blockColor}; }
        
    }`;

    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

  const styles = {
    animationName: animationName,
    // animationName: isHovering ? animationName: null,
    backgroundColor: props.blockColor, 
    opacity: isHovering ? .90 : 1,
    transition: "opacity .7s", 
    height: props.blockHeight, 
    width: props.blockWidth, 
    zIndex: 9, 
    display: "flex", 
    flexDirection: "row",
    WebkitAnimation: `pulse ${Math.floor(Math.random() * (40 - 0) + 40)}s linear infinite`,
    // keyframesStyle
  }

  // const keyframesStyle = `
  //     @-webkit-keyframes pulse {
  //       0%   { background-color: #fecd6d; }
  //       25%  { background-color: #ef7b88; }
  //       50%  { background-color: #acdacf; }
  //       75%  { background-color: #87c3db; }
  //       100% { background-color: #fecd6d; }
  //     }
  //   `;
    
  
  return (
      <div 
        className="block" 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={styles}
        key={props.blockNumber}
        ></div>
  );
  
}

