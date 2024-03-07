import React, { useState, useEffect } from "react";
import "./Collection2.scss";
import Block from "./Block/Block";
import House from "./House/House";
// import Sun from "./Sun/Sun";
// import Stars from './Stars/Stars';
import InfoButton from "../../Components/InfoButton/InfoButton";
import Modal from "../../Components/Modal/Modal";
import { Dropdown } from "../../Components/Dropdown/Dropdown";

export default function Collection2() {
  const [modalOpen, setModalOpen] = useState(false);
  const [season, setSeason] = useState("spring");
  const [grassColor, setGrassColor] = useState("#719951");
  const [sky, setSky] = useState([]);

  const [grass, setGrass] = useState([]);
  const [time, setTime] = useState(new Date().getHours());
  const [TODLable, setTODLable] = useState("");

  const [animate, setAnimate] = useState(false);
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
    setSky([]);
    setSeason(event.target.value);

    if (event.target.value === "spring") {
      setGrassColor("#719951");
      grassChange();
      setSky(spring);
      sky.concat(grass);
    } else if (event.target.value === "summer") {
      setGrassColor("#798339");
      grassChange();
      setSky(summer);
    } else if (event.target.value === "autumn") {
      setGrassColor("#8E5C38");
      grassChange();
      setSky(spring);
    } else {
      setGrassColor("#EAF2F7");
      grassChange();
      setSky(spring);
    }
  };

  const grassChange = () => {
    setGrass([]);
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
          color: grassColor,
          width: newWidth + "vw",
          height: height,
          horizon: false,
        };
        grassMatrixRow.push(blade);
      }
      grassMatrix.push(grassMatrixRow);
    }
    setGrass(grassMatrix);
  };

  // Matrix of color blocks including:
  //   color,
  //   duration of linear gradient animation
  //   width of block
  //   height of block

  // DONE
  const spring = [
    [
      {
        color: "#C9DDD4",
        duration: "12",
        width: "100vw",
        height: "4vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#C9DDD4",
        duration: "10",
        width: "100vw",
        height: "7vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#C6D7CF",
        duration: "15",
        width: "100vw",
        height: "9vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#BCCFC9",
        duration: "20",
        width: "100vw",
        height: "6vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#B7CAC4",
        duration: "20",
        width: "100vw",
        height: "3vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#B8C9C1",
        duration: "20",
        width: "100vw",
        height: "8vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#B7C7BD",
        duration: "20",
        width: "100vw",
        height: "5vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#B3C3B9",
        duration: "20",
        width: "100vw",
        height: "6vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#BBBEB3",
        duration: "20",
        width: "100vw",
        height: "9vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#B9BCAB",
        duration: "20",
        width: "100vw",
        height: "6vh",
        horizon: true,
      },
    ],
  ];

  const summer = [
    [
      {
        color: "red",
        duration: "12",
        width: "100vw",
        height: "4vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#C9DDD4",
        duration: "10",
        width: "100vw",
        height: "7vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#C6D7CF",
        duration: "15",
        width: "100vw",
        height: "9vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#BCCFC9",
        duration: "20",
        width: "100vw",
        height: "6vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#B7CAC4",
        duration: "20",
        width: "100vw",
        height: "3vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#B8C9C1",
        duration: "20",
        width: "100vw",
        height: "8vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#B7C7BD",
        duration: "20",
        width: "100vw",
        height: "5vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#B3C3B9",
        duration: "20",
        width: "100vw",
        height: "6vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#BBBEB3",
        duration: "20",
        width: "100vw",
        height: "9vh",
        horizon: true,
      },
    ],
    [
      {
        color: "#B9BCAB",
        duration: "20",
        width: "100vw",
        height: "6vh",
        horizon: true,
      },
    ],
  ];

  useEffect(() => {

    setSky(spring);
      grassChange();
      console.log("spring");
      console.log(spring);
      console.log("sky");
      console.log(sky);
      console.log("grass");
      console.log(grass);
      sky.concat(grass);

    const intervalId = setInterval(() => {
      
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [sky]);

  return (
    <div>
      <div className="collection-two-container">
        <House />
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
        {sky.map((items, index) => {
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
        {grass.map((items, index) => {
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
