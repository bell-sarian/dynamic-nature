// Source: https://jsfiddle.net/psullivan6/ma6e78m0/ 

import React, { useState, useEffect } from "react";
import styles from './Stars.scss';

// Twinkling Night Sky by Sharna

// Random Stars
export default function Stars() {

    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight,
    ]);
    const domContent = [
        
    ];

    useEffect(() => {
        const handleWindowResize = () => {
        setWindowSize([window.innerWidth, window.innerHeight]);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
        window.removeEventListener('resize', handleWindowResize);
        };
    });

    for (let i = 0 ; i < 70; i++) {
        var xposition = Math.floor(Math.random() * window.innerWidth);
        var yposition = Math.floor(Math.random() * (window.innerHeight / 2));
        var star_type = Math.floor((Math.random() * 3) + 1);
        var position = {
            "x" : window.innerWidth * xposition,
            "y" : window.innerHeight * yposition,
        };
        domContent.push({"type": star_type, "yAxis": yposition, "xAxis": xposition})
    }
    

    return(
        <div className="galaxy">
            {domContent.map((item, index) => {
                var xposition = Math.floor(Math.random() * window.innerWidth);
                var yposition = Math.floor(Math.random() * window.innerHeight);
                var star_type = Math.floor((Math.random() * 3) + 1);

                return (
                <div className={"star star-type" + item.type} style={{ top : item.yAxis , left : item.xAxis}} key={index} ></div>
                )
            })}
        </div>
        
    )
    
};

