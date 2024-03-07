import React, { Component, useState, useEffect } from "react";
import "./OceanSunset.css";
import Block from "./Block/Block.tsx";
import Sun from "./Sun/Sun.tsx";
import Stars from "./Stars/Stars.tsx";
import InfoButton from "../../Components/InfoButton/InfoButton.tsx";
import Modal from "../../Components/Modal/Modal.tsx";
import { Dropdown } from "../../Components/Dropdown/Dropdown.tsx";
import {moon, moonrise, moonset, sunrise, sunset, daysun, midsunset } from "../../Assets/data/ocean_sunset_data"

export default function OceanSunset() {
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
    "The images depict different times of day and change real time to match the users's time of day.",
  ];
  const options = [
    { label: `Current Time: ${TODLable}`, value: "currenttime" },
    { label: "Moon", value: "moon" },
    { label: "Moonset", value: "moonset" },
    { label: "Sunrise", value: "sunrise" },
    { label: "Daytime Sun", value: "daysun" },
    { label: "Pre Sunset", value: "midsunset" },
    { label: "Sunset", value: "sunset" },
    { label: "Moonrise", value: "moonrise" },
  ];

  

  const setCurrentTimeOfDay = () => {
    if (time <= 4 || time > 19) {
      setTimeOfDayArray(moon);
      setSunStyle("moon");
      setStarBool(true);
      setTODLable("Moon");
    } else if (time >= 4 && time < 5) {
      setTimeOfDayArray(moonset);
      setSunStyle("moonset");
      setStarBool(true);
      setTODLable("Moonset");
    } else if (time >= 6 && time < 8) {
      setTimeOfDayArray(sunrise);
      setSunStyle("sunrise");
      setStarBool(false);
      setTODLable("Sunrise");
    } else if (time >= 8 && time < 16) {
      setTimeOfDayArray(daysun);
      setSunStyle("daysun");
      setStarBool(false);
      setTODLable("Daytime Sun");
    } else if (time >= 16 && time < 17) {
      setTimeOfDayArray(midsunset);
      setSunStyle("midsunset");
      setStarBool(false);
      setTODLable("Pre Sunset");
    } else if (time >= 17 && time < 18) {
      setTimeOfDayArray(sunset);
      setSunStyle("sunset");
      setStarBool(false);
      setTODLable("Sunset");
    } else if (time >= 18 && time <= 19) {
      setTimeOfDayArray(moonrise);
      setSunStyle("moonrise");
      setStarBool(true);
      setTODLable("Moonrise");
    } else {
      setTimeOfDayArray(moon);
      setSunStyle("moon");
      setStarBool(true);
      setTODLable("Moon");
    }
  };

  const handleTimeOfDayChange = (event) => {
    setTimeOfDay(event.target.value);
    console.log("TOD " + event.target.value);

    if (event.target.value === "currenttime") {
      // The if/else statements
      setCurrentTimeOfDay();
    } else if (event.target.value === "moon") {
      setTimeOfDayArray(moon);
      setSunStyle("moon");
      setStarBool(true);
    } else if (event.target.value === "moonset") {
      setTimeOfDayArray(moonset);
      setSunStyle("moonset");
      setStarBool(true);
    } else if (event.target.value === "sunrise") {
      setTimeOfDayArray(sunrise);
      setSunStyle("sunrise");
      setStarBool(false);
    } else if (event.target.value === "daysun") {
      setTimeOfDayArray(daysun);
      setSunStyle("daysun");
      setStarBool(false);
    } else if (event.target.value === "midsunset") {
      setTimeOfDayArray(midsunset);
      setSunStyle("midsunset");
      setStarBool(false);
    } else if (event.target.value === "sunset") {
      setTimeOfDayArray(sunset);
      setSunStyle("sunset");
      setStarBool(false);
    } else if (event.target.value === "moonrise") {
      setTimeOfDayArray(moonrise);
      setSunStyle("moonrise");
      setStarBool(true);
    }
  };

  useEffect(() => {
    setCurrentTimeOfDay();
  }, [time]);

  return (
    <div>
      <div className="ocean-sunset-container">
        {starBool ? <Stars /> : null}
        {/* <Stars /> */}

        {/* Sun component */}
        <Sun sunStyle={sunStyle} />

        {/* Outer loop to iterate through color matrix row-by-row */}
        {timeOfDayArray.map((items, index) => {
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
        {/* <button onClick={openFullscreen()} >Full Screen</button> */}
      </div>
      <div className="time-of-day-select-container">
        <Dropdown items={options} onChange={handleTimeOfDayChange} />
      </div>
      <div onClick={() => setModalOpen(true)} className="info-button-container">
        <InfoButton />
      </div>

      <Modal
        setModalOpen={setModalOpen}
        content={content}
        modalOpen={modalOpen}
      />
    </div>
  );
}
