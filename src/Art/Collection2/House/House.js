import React from "react";
import "./House.css";
export default function House(props) {
    console.log("house");
    document.documentElement.style.setProperty('--house-color', props.homeColor);
    document.documentElement.style.setProperty('--door-color', props.doorColor);
    document.documentElement.style.setProperty('--window-color', props.windowColor);
    document.documentElement.style.setProperty('--window-border-color', props.windowBorderColor);
    return (React.createElement("div", { className: "house-container" },
        React.createElement("div", { className: "house", style: { backgroundColor: props.homeColor } },
            React.createElement("div", { className: "door", style: { backgroundColor: props.doorColor } }),
            React.createElement("div", { className: "window", style: { backgroundColor: props.windowColor } }))));
}
