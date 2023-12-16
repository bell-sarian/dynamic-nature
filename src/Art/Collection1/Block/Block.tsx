import React, {  useState, useEffect  } from "react";
import "./Block.scss";

export default function Block(props)  {
  const [isHovering, setIsHovering] = useState(false);
  const [ animateFlag, setAnimateFlag] = useState(false)
  const [ duration, setDuration ] = useState(props.numSubItems > 1 ? Math.floor(Math.random() * (15 - 2) + 2) : Math.floor(Math.random() * (20 - 15) + 15))
  const [ blockZIndex, setBlockZIndex ] = useState(props.horizon == true ? 9 : 100);

  // Upon component mounting, set off animation flag to true.
  //    Prevents animation from starting before DOM is finished rendering
  useEffect(() => {    
    setAnimateFlag(true) 
  });

  // Handle hover effect mouse enter
  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  // Handle hover effect mouse leave
  const handleMouseLeave = () => {
    setIsHovering(false);
  };


  // Function: ColorLuminence
  // Props: 
  //    hex - hex color number
  //    Luminence change
  // Output: hex of color with lumocity increased by lum amount
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
    
    // Returns RGB of hex number
    return rgb;
  }

  // Get style sheet for document
  let styleSheet = document.styleSheets[0];
  // Create animation variable to pulse.
  // Each pulse is uniquely named based on the matricie: pulse-ROW-COL
  let animationName = `pulse-${props.blockNumber}-${props.blockSubNumber}`;

  // Create keyframes variable with animation name
  // Four gradient slots exist:
  //    first - origional color
  //    Second - OG Color + 10% lumocity increase 
  //    Third - OG Color + 20% lumocity increase 
  //    Fourth - OG Color + 30% lumocity increase 
  let keyframesHorizon =
  `@-webkit-keyframes ${animationName} {
    0%   { background-color: ${props.blockColor}; }
    25%  { background-color: ${ColorLuminance(props.blockColor, .05)} }
    50%  { background-color: ${ColorLuminance(props.blockColor, .07)}}
    75%  { background-color: ${ColorLuminance(props.blockColor, .10)} }
    100% { background-color: ${props.blockColor}; }
  }`;
  
    let keyframesOcean =
    `@-webkit-keyframes ${animationName} {
        0%   { background-color: ${props.blockColor}; }
        25%  { background-color: ${ColorLuminance(props.blockColor, .10)} }
        50%  { background-color: ${ColorLuminance(props.blockColor, .20)}}
        75%  { background-color: ${ColorLuminance(props.blockColor, .30)} }
        100% { background-color: ${props.blockColor}; }
        
    }`;

    let keyframes = props.horizon ? keyframesHorizon : keyframesOcean;

    // Inject the new style rules into the stylesheet
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);



  // Define styles of block div for classname block-ROW-COL
  const styles = {
    animationName: animateFlag ? animationName : null, // If animation flag is TRUE, initiate animation
    backgroundColor: props.blockColor, // OG color passed in from parent function
    opacity: isHovering ? .80 : 1,
    transition: "all 2s ease-in-out", 
    height: props.blockHeight, 
    width: props.blockWidth, 
    zIndex: blockZIndex, 
    display: "flex", 
    flexDirection: "row",
    WebkitAnimation: `pulse ${duration}s linear infinite`, // define aniation through Webkit to pulse for DURATION seconds, linearly, infinately
  }
  
  return (
      <div 
        className={"block-container block-" + props.blockNumber + "-" + props.blockSubNumber}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={styles}
        key={props.blockNumber}
        ></div>
  );
  
}

