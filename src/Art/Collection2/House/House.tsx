import React from "react";
import "./House.css";
export default function House(props) {
  console.log("house");

  document.documentElement.style.setProperty('--house-color', props.homeColor);
  document.documentElement.style.setProperty('--door-color', props.doorColor);
  document.documentElement.style.setProperty('--window-color', props.windowColor);
  document.documentElement.style.setProperty('--window-border-color', props.windowBorderColor);

  return (
    <div className="house-container">
      <div className="house" style={{ backgroundColor: props.homeColor }}>
        <div
          className="door"
          style={{ backgroundColor: props.doorColor }}
        ></div>
        <div
          className="window"
          style={{ backgroundColor: props.windowColor }}
        ></div>
      </div>
    </div>
  );
}
