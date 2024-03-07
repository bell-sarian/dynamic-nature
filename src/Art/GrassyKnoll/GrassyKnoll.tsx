import React, { useState, useEffect } from "react";
import "./GrassyKnoll.scss";
import Block from "./Block/Block.tsx";
import House from "./House/House.tsx";
// import Sun from "./Sun/Sun";
// import Stars from './Stars/Stars';
import InfoButton from "../../Components/InfoButton/InfoButton.tsx";
import Modal from "../../Components/Modal/Modal.tsx";
import { Dropdown } from "../../Components/Dropdown/Dropdown.tsx";
import {spring, summer, autumn, winter } from "../../Assets/data/grassy_knoll_data.js"

export default function GrassyKnoll() {
  const [modalOpen, setModalOpen] = useState(false);
  const [season, setSeason] = useState();
  const [grassColor, setGrassColor] = useState("#719951");

  const [seasonArray, setSeasonArray] = useState([]);
  const [grass, setGrass] = useState([]);

  const [homeColor, setHomeColor] = useState('#a43924');
  const [doorColor, setDoorColor] = useState('#c2c2c2');
  const [windowColor, setWindowColor] = useState('#96ecffe0');
  const [windowBorderColor, setWindowBorderColor] = useState('#ffffffe8');

  let content = [
    "Ocean Sun is an impressionistic art series consisting of seven animated images of the sun or moon over the ocean at different times of the day.",
    "The images depict different times of day and change real time to match the users's time of day.",
  ];
  const options = [
    { label: "Spring", value: "spring" },
    { label: "Summer", value: "summer" },
    { label: "Autumn", value: "autumn" },
    { label: "Winter", value: "winter" },
  ];

  const handleSeasonChange = (event) => {
    setSeason(event.target.value);

    if (event.target.value === "spring") {
      setGrassColor("#719951");
      setHomeColor('#a43924')
      setDoorColor('#c2c2c2')
      setWindowColor('#96ecffe0')
      setWindowBorderColor('#8C6967')
      handleSeasonArray(spring, "#719951");
    } else if (event.target.value === "summer") {
      setGrassColor("#80621C");
      setHomeColor('#A42826')
      setDoorColor('#D2BDB7')
      setWindowColor('#7cadb8e0')
      setWindowBorderColor('#c2c2c2')
      handleSeasonArray(summer, "#798339");
    } else if (event.target.value === "autumn") {
      setGrassColor("#8E5C38");
      setHomeColor('#582722')
      setDoorColor('#c2c2c2')
      setWindowColor('#96ecffe0')
      setWindowBorderColor('#ADBAAB')
      handleSeasonArray(autumn, "#8E5C38");
    } else {
      setGrassColor("#EAF2F7");
      setHomeColor('#a43924')
      setDoorColor('#c2c2c2')
      setWindowColor('#96ecffe0')
      setWindowBorderColor('#8C6967')
      handleSeasonArray(winter, "#DAF2F7");
    }
  };

  const handleSeasonArray = (seasonName, color) => {
    let currentseason = seasonName ;
    let allGrass = grassChange(color);

    allGrass.forEach((g) => {
      currentseason.push(g);
    });
    
    setSeasonArray(currentseason);
  }

  const grassChange = (color) => {
    // setGrass([]);
    let grassMatrix = [];
    let grassMatrixRow = [];
    let height = "2vh";
    let width = 100;
    let newWidth = 0;

    for (let j = 0; j < 15; j++) {
      grassMatrixRow = [];
      height = Math.floor(Math.random() * (5 - 2) + 2) + "vh";
      width = 100;
      while (width > 0) {
        // let blade = {"color": Math.floor(Math.random()*16777215).toString(16), "width": "1vw", "height": "2vh", "horizon": false }
        newWidth = Math.floor(Math.random() * (5 - 1) + 1);
        width -= newWidth;
        let blade = {
          color: color,
          duration: '' + Math.floor(Math.random() * (10 - 1) + 1),
          width: newWidth + "vw",
          height: height,
          horizon: true,
        };
        grassMatrixRow.push(blade);
      }
      grassMatrix.push(grassMatrixRow);
    }
    console.log(grassMatrix);
    console.log(grassMatrix);
    // setGrass(grassMatrix);
    return grassMatrix;
  };

  

  useEffect(() => {
    handleSeasonArray(spring, "#719951")
  }, []);

  return (
    <div>
      <div className="collection-two-container">
        <House homeColor={homeColor} doorColor={doorColor} windowColor={windowColor} windowBorderColor={windowBorderColor} />
        <div class="cloud large cloud-1">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div class="cloud normal cloud-2">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div class="cloud small cloud-3">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        {seasonArray.map((items, index) => {
          return (
            <div key={index} className="row-container">
              {/* Inner loop to iterate through color matrix column-by-column */}
              {items.map((subItems, subIndex) => {
                return (
              <Block
                key={items.color + "-" + subIndex}
                blockNumber={index}
                blockSubNumber={subIndex}
                blockColor={subItems.color}
                blockSecondColor={subItems.color2}
                blockWidth={subItems.width}
                blockHeight={subItems.height}
                blockDuration={subItems.duration}
                horizon={subItems.horizon}
                numSubItems={items.length}
              />
              );
              })} 
            </div>
          );
        })}
      </div>

      <div className="season-select-container">
        <Dropdown items={options} onChange={handleSeasonChange} />
      </div>
    </div>
  );
}
