import React, { useState } from "react";
import "./Collection3.css";
import Block from "./Block/Block";
export default function Collection3() {
    const [modalOpen, setModalOpen] = useState(false);
    const [timeOfDay, setTimeOfDay] = useState("");
    const [timeOfDayArray, setTimeOfDayArray] = useState([]);
    const [sunStyle, setSunStyle] = useState("");
    const [starBool, setStarBool] = useState(null);
    const [time, setTime] = useState(new Date().getHours());
    const [TODLable, setTODLable] = useState("");
    const [animate, setAnimate] = useState(false);
    let content = [
        "Ocean Sun is an impressionistic art series consisting of seven animated images of the sun or moon over the ocean at different times of the day.",
        "The images depict different times of day and change real time to match the users's time of day."
    ];
    const options = [
        { label: `Current Time: ${TODLable}`, value: 'currenttime' },
        { label: 'Moon', value: 'moon' },
        { label: 'Moonset', value: 'moonset' },
        { label: 'Sunrise', value: 'sunrise' },
        { label: 'Daytime Sun', value: 'daysun' },
        { label: 'Pre Sunset', value: 'midsunset' },
        { label: 'Sunset', value: 'sunset' },
        { label: 'Moonrise', value: 'moonrise' },
    ];
    let grassColors = ["#7C7B21",];
    // Matrix of color blocks including: 
    //   color, 
    //   duration of linear gradient animation
    //   width of block
    //   height of block  
    // DONE
    const colorGrid = [];
    let row = [];
    let height = 100;
    let width = 100;
    let newWidth = 0;
    let newHeight = 0;
    while (height > 0) {
        row = [];
        newHeight = Math.floor(Math.random() * (5 - 2) + 2);
        width = 100;
        for (let i = 0; i < 100; i++) {
            //   let blade = {"color": Math.floor(Math.random()*16777215).toString(16), "width": "1vw", "height": "2vh", "horizon": false }
            newWidth = Math.floor(Math.random() * (20 - 1) + 1);
            width -= newWidth;
            let blade = { "color": Math.floor(Math.random() * 16777215).toString(16), "width": "1vw", "height": newHeight + 'vh', "horizon": false };
            row.push(blade);
        }
        colorGrid.push(row);
        height -= newHeight;
    }
    console.log(colorGrid);
    return (React.createElement("div", null,
        React.createElement("div", { className: "collection-three-container" }, colorGrid.map((items, index) => {
            return (React.createElement("div", { key: index, className: "row-container" }, items.map((subItems, subIndex) => {
                return (React.createElement(Block, { key: items.color + "-" + subIndex, blockNumber: index, blockSubNumber: subIndex, blockColor: subItems.color, blockSecondColor: subItems.color2, blockWidth: subItems.width, blockHeight: subItems.height, blockDuration: subItems.duration, horizon: subItems.horizon, numSubItems: items.length }));
            })));
        }))));
}
