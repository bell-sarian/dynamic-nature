import React, { useState, useEffect } from "react";
import styles from './Sun.scss';

export default function Sun(props)  {
  const [isHovering, setIsHovering] = useState(false);

  const mediaMatch = window.matchMedia('(min-width: 500px)');
  const [matches, setMatches] = useState(mediaMatch.matches);

  const [ sunStyle, setSunStyle ] = useState([]);

  useEffect(() => {
    const handler = e => setMatches(e.matches);
    mediaMatch.addListener(handler);
    return () => mediaMatch.removeListener(handler);
  });

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };


  const moon = {
    background: "radial-gradient(#F4F1F1, #DAD7D7)",
    opacity: isHovering ? .80 : 1,
    transition: "opacity .7s", 
    top: '50%',
    zIndex: 10, 
  }
  const moonset = {
    background: "radial-gradient(#F4F1F1, #DAD7D7)",
    opacity: isHovering ? .80 : 1,
    transition: "opacity .7s", 
    top: '50%',
    zIndex: 10, 
  }
  const sunrise = {
    background: "radial-gradient(#FF3E5F, #FF5159)",
    opacity: isHovering ? .80 : 1,
    transition: "opacity .7s", 
    top: '50%',
    zIndex: 10, 
  }
  const sun = {
    background: "radial-gradient(#FF3E5F, #FF5159)",
    opacity: isHovering ? .80 : 1,
    transition: "opacity .7s", 
    top: '50%',
    zIndex: 10, 
  }
  const midSunset = {
    background: "radial-gradient(#FF3E5F, #FF5159)",
    opacity: isHovering ? .80 : 1,
    transition: "opacity .7s", 
    top: '50%',
    zIndex: 10, 
  }
  const sunset = {
    background: "radial-gradient(#FF3E5F, #FF5159)",
    opacity: isHovering ? .80 : 1,
    transition: "opacity .7s", 
    top: '50%',
    zIndex: 10, 
  }
  const moonrise = {
    background: "radial-gradient(#F4F1F1, #DAD7D7)",
    opacity: isHovering ? .80 : 1,
    transition: "opacity .7s", 
    top: '50%',
    zIndex: 10, 
  }

  let styles = [];

  if (props.sunStyle === "moon") {
    styles = moon
  } else if (props.sunStyle === "moonset") {
    styles = moonset
  } else if (props.sunStyle === "sunrise"){
    styles = sunrise;
  } else if (props.sunStyle === "moonset"){
    styles = sun;
  } else if (props.sunStyle === "midSunset"){
    styles = midSunset;
  } else if (props.sunStyle === "sunset"){
    styles = sunset;
  } else if (props.sunStyle === "moonrise"){
    styles = moonrise;
  }
  
  return (
      <div 
        className="sun" 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={styles}
        ></div>
  );
  
}

