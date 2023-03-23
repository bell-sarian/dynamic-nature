import React, { Component, useState, useEffect } from "react";
import Styles from "./Collection2.css";
import Block from "./Block/Block";
import House from "./House/House";
// import Sun from "./Sun/Sun";
// import Stars from './Stars/Stars';
import InfoButton from "../../Components/InfoButton/InfoButton";
import Modal from '../../Components/Modal/Modal';
import { Dropdown } from "../../Components/Dropdown/Dropdown";

export default function Collection2()  {

  const [modalOpen, setModalOpen] = useState(false);
  const [timeOfDay, setTimeOfDay] = useState("");
  const [timeOfDayArray, setTimeOfDayArray] = useState([]);
  const [sunStyle, setSunStyle] = useState("");
  const [starBool, setStarBool] = useState(null);
  const [time, setTime] = useState(new Date().getHours());
  const [TODLable, setTODLable] = useState("");

  const [animate, setAnimate] = useState(false)
  let content = [
    "Ocean Sun is an impressionistic art series consisting of seven animated images of the sun or moon over the ocean at different times of the day.", 
    "The images depict different times of day and change real time to match the users's time of day."
  ]
  const options = [

    { label: `Current Time: ${TODLable}`, value: 'currenttime'},
    { label: 'Moon', value: 'moon'},
    { label: 'Moonset', value: 'moonset' },
    { label: 'Sunrise', value: 'sunrise' },
    { label: 'Daytime Sun', value: 'daysun' },
    { label: 'Pre Sunset', value: 'midsunset' },
    { label: 'Sunset', value: 'sunset' },
    { label: 'Moonrise', value: 'moonrise' },
 
  ];

  let grassColors = ["#7C7B21", ];

    // Matrix of color blocks including: 
    //   color, 
    //   duration of linear gradient animation
    //   width of block
    //   height of block  

    // DONE
    const summer = [
      [{"color": "#C9DDD4", "duration": "12", "width": "100vw", "height": "4vh", "horizon": true }],
      [{"color": "#C9DDD4", "duration": "10", "width": "100vw", "height": "7vh", "horizon": true }],
      [{"color": "#C6D7CF", "duration": "15", "width": "100vw", "height": "9vh", "horizon": true }],
      [{"color": "#BCCFC9", "duration": "20", "width": "100vw", "height": "6vh", "horizon": true }],
      [{"color": "#B7CAC4", "duration": "20", "width": "100vw", "height": "3vh", "horizon": true }],
      [{"color": "#B8C9C1", "duration": "20", "width": "100vw", "height": "8vh", "horizon": true }],
      [{"color": "#B7C7BD", "duration": "20", "width": "100vw", "height": "5vh", "horizon": true }],
      [{"color": "#B3C3B9", "duration": "20", "width": "100vw", "height": "6vh", "horizon": true }],
      [{"color": "#BBBEB3", "duration": "20", "width": "100vw", "height": "9vh", "horizon": true }],
      [{"color": "#B9BCAB", "duration": "20", "width": "100vw", "height": "6vh", "horizon": true }],

    ]

      let grassMatrixRow = [];
      let height = "2vh"
      let width = 100
      let newWidth = 0;

      for (let j = 0; j < 15; j++) {
        grassMatrixRow = []
        height = Math.floor(Math.random() * (5 - 2) + 2) + "vh"
        width = 100
        while(width > 0) {
          // let blade = {"color": Math.floor(Math.random()*16777215).toString(16), "width": "1vw", "height": "2vh", "horizon": false }
          newWidth = Math.floor(Math.random() * (20 - 1) + 1)
          width -= newWidth;
          let blade = {"color": grassColors[Math.floor(Math.random() * grassColors.length)], "width": newWidth + "vw", "height": height, "horizon": false }
          grassMatrixRow.push(blade);
        }
        summer.push(grassMatrixRow)
      }
      
      console.log(summer)
      

    
    
    return (
      <div>
        
        <div className="collection-two-container">
          <House />
        
          {summer.map((items, index) => {
            
            return (
              <div key={index} className="row-container">
                {/* Inner loop to iterate through color matrix column-by-column */}
                {items.map((subItems, subIndex) => {

                  return (
                    <Block  key={items.color + "-" + subIndex} blockNumber={index} blockSubNumber={subIndex} blockColor={subItems.color} blockSecondColor={subItems.color2} blockWidth={subItems.width} blockHeight={subItems.height} blockDuration={subItems.duration} horizon={subItems.horizon} numSubItems={items.length} />
                  )
                })}
              </div>
            )
          })}
          
        </div>

        
        
      </div>
    );
  
}