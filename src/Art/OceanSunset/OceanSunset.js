import React, { Component, useState } from "react";
import Styles from "./OceanSunset.css";
import Block from "./Block/Block";
import Sun from "./Sun/Sun";

import { Keyframes } from "@emotion/serialize";

export default function OceanSunset()  {

  const [styles, setStyles] = useState(null);
  
    const colors = [
        [{"color": "#764F62", "duration": "12", "width": "100vw", "height": "2vh"}],
        [{"color": "#6E475A", "duration": "10", "width": "100vw", "height": "13vh"}],
        [{"color": "#6A4356", "duration": "15", "width": "100vw", "height": "8vh"}],
        [{"color": "#634456", "duration": "20", "width": "100vw", "height": "10vh"}],
        [{"color": "#60445A", "duration": "13", "width": "100vw", "height": "10vh"}],
        [{"color": "#54475B", "duration": "19", "width": "100vw", "height": "4vh"}],
        [{"color": "#4D4D5F", "duration": "11", "width": "100vw", "height": "7vh"}],
        [{"color": "#454E5D", "duration": "19", "width": "100vw", "height": "7vh"}],
        [{"color": "#70646A", "duration": "14", "width": "100vw", "height": "1vh"}],
        [{"color": "#866B6A", "duration": "17", "width": "100vw", "height": "4vh"}],
        [{"color": "#52504E", "duration": "5", "width": "3vw", "height": "3vh"},
          {"color": "#4B5052", "duration": "4", "width": "9vw", "height": "3vh"},
          {"color": "#2D3238", "duration": "3", "width": "5vw", "height": "3vh"},
          {"color": "#5C6D81", "duration": "2", "width": "20vw", "height": "3vh"},
          {"color": "#6E7D8E", "duration": "3", "width": "63vw", "height": "3vh"},
        ],
        [{"color": "#675D5C", "duration": "5", "width": "3vw", "height": "2vh"},
          {"color": "#59514F", "duration": "4", "width": "12vw", "height": "2vh"},
          {"color": "#43444B", "duration": "2", "width": "4vw", "height": "2vh"},
          {"color": "#465666", "duration": "3", "width": "35vw", "height": "2vh"},
          {"color": "#667486", "duration": "6", "width": "46vw", "height": "2vh"},
        ],
        [{"color": "#635959", "duration": "7", "width": "9vw", "height": "3vh"},
          {"color": "#59514F", "duration": "5", "width": "30vw", "height": "3vh"},
          {"color": "#465666", "duration": "4", "width": "25vw", "height": "3vh"},
          {"color": "#526373", "duration": "5", "width": "36vw", "height": "3vh"},
        ],
        [{"color": "#635353", "duration": "3", "width": "5vw", "height": "2vh"},
          {"color": "#505053", "duration": "5", "width": "7vw", "height": "2vh"},
          {"color": "#2E3339", "duration": "6", "width": "7vw", "height": "2vh"},
          {"color": "#59514F", "duration": "2", "width": "81vw", "height": "2vh"},
        ],
        [{"color": "#5C5050", "duration": "2", "width": "3vw", "height": "4vh"},
          {"color": "#77655E", "duration": "4", "width": "20vw", "height": "4vh"},
          {"color": "#836560", "duration": "3", "width": "55vw", "height": "4vh"},
          {"color": "#77605A", "duration": "5", "width": "32vw", "height": "4vh"},
        ],
        [{"color": "#64524E", "duration": "3", "width": "2vw", "height": "1vh"},
          {"color": "#342E2E", "duration": "5", "width": "5vw", "height": "1vh"},
          {"color": "#6D5D56", "duration": "2", "width": "20vw", "height": "1vh"},
          {"color": "#745356", "duration": "4", "width": "40vw", "height": "1vh"},
          {"color": "#575452", "duration": "7", "width": "40vw", "height": "1vh"},
        ],
        [{"color": "#232325", "duration": "5", "width": "1vw", "height": "7vh"},
          {"color": "#342E2E", "duration": "4", "width": "5vw", "height": "7vh"},
          {"color": "#1F2024", "duration": "6", "width": "15vw", "height": "7vh"},
          {"color": "#2D3134", "duration": "7", "width": "50vw", "height": "7vh"},
          {"color": "#48494D", "duration": "5", "width": "29vw", "height": "7vh"},
        ],
        [{"color": "#49433D", "duration": "3", "width": "3vw", "height": "4vh"},
          {"color": "#3F3B38", "duration": "7", "width": "8vw", "height": "4vh"},
          {"color": "#504645", "duration": "3", "width": "60vw", "height": "4vh"},
          {"color": "#645A57", "duration": "5", "width": "50vw", "height": "4vh"},
          {"color": "#564E4C", "duration": "6", "width": "29vw", "height": "4vh"},
        ],
        [{"color": "#372D2E", "duration": "4", "width": "3vw", "height": "5vh"},
          {"color": "#463637", "duration": "2", "width": "10vw", "height": "5vh"},
          {"color": "#463434", "duration": "3", "width": "15vw", "height": "5vh"},
          {"color": "#443135", "duration": "6", "width": "60vw", "height": "5vh"},
          {"color": "#706F79", "duration": "5", "width": "12vw", "height": "5vh"},
        ],
        [{"color": "#372D2E", "duration": "5", "width": "3vw", "height": "3vh"},
          {"color": "#463637", "duration": "4", "width": "10vw", "height": "3vh"},
          {"color": "#463434", "duration": "8", "width": "15vw", "height": "3vh"},
          {"color": "#443135", "duration": "7", "width": "70vw", "height": "3vh"},
          {"color": "#474143", "duration": "5", "width": "2vw", "height": "3vh"},
        ],
        
    ]

    
    return (
      <div className="ocean-sunset-container">
        <Sun />
        
        {colors.map((items, index) => {
          
          return (
            <div key={index} className="row-container">
              {items.map((subItems, subIndex) => {

                return (
                  <Block  key={index + "-" + subIndex} blockNumber={index} blockSubNumber={subIndex} blockColor={subItems.color} blockSecondColor={subItems.color2} blockWidth={subItems.width} blockHeight={subItems.height} blockDuration={subItems.duration}/>
                )
              })}
            </div>
          )
        })}
              
      </div>
    );
  
}