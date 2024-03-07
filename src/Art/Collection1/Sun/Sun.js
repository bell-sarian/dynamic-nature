import React, { useState, useEffect } from "react";
import './Sun.scss';
export default function Sun(props) {
    const [isHovering, setIsHovering] = useState(false);
    // const [timeOfDaySun, setTimeOfDaySun ] = useState(props.sunStyle);
    const mediaMatch = window.matchMedia('(min-width: 500px)');
    const [matches, setMatches] = useState(mediaMatch.matches);
    useEffect(() => {
        const handler = e => setMatches(e.matches);
        mediaMatch.addListener(handler);
        return () => mediaMatch.removeListener(handler);
    });
    function setColor(newColor) {
        document.documentElement.style.setProperty('--logo-color', newColor);
    }
    const handleMouseEnter = () => {
        setIsHovering(true);
    };
    const handleMouseLeave = () => {
        setIsHovering(false);
    };
    return (React.createElement("div", { className: "sun " + props.sunStyle, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave }));
}
