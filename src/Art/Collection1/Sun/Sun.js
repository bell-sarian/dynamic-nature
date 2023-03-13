import React, { useState, useEffect } from "react";

export default function Sun(props)  {
  const [isHovering, setIsHovering] = useState(false);

  const mediaMatch = window.matchMedia('(min-width: 500px)');
  const [matches, setMatches] = useState(mediaMatch.matches);


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

  
  return (
      <div 
        className={"sun " + props.sunStyle }
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ></div>
  );
  
}

