import React, { Component, useState } from "react";
import Styles from "./OceanSunset.css";
import Block from "./Block/Block";
import Sun from "./Sun/Sun";

import { Keyframes } from "@emotion/serialize";

export default function OceanSunset()  {

  const [styles, setStyles] = useState(null);
  
    const colors = [
        [{"color": "#764F62", "color2": "#b37894", "width": "100vw", "height": "2vh"}],
        [{"color": "#6E475A", "color2": "#705160", "width": "100vw", "height": "13vh"}],
        [{"color": "#6A4356", "color2": "#6A4390", "width": "100vw", "height": "8vh"}],
        [{"color": "#634456", "color2": "#632456", "width": "100vw", "height": "10vh"}],
        [{"color": "#60445A", "width": "100vw", "height": "10vh"}],
        [{"color": "#54475B", "width": "100vw", "height": "4vh"}],
        [{"color": "#4D4D5F", "width": "100vw", "height": "7vh"}],
        [{"color": "#454E5D", "width": "100vw", "height": "7vh"}],
        [{"color": "#70646A", "width": "100vw", "height": "1vh"}],
        [{"color": "#866B6A", "width": "100vw", "height": "4vh"}],
        [{"color": "#52504E", "width": "3vw", "height": "3vh"},
          {"color": "#4B5052", "width": "9vw", "height": "3vh"},
          {"color": "#2D3238", "width": "5vw", "height": "3vh"},
          {"color": "#5C6D81", "width": "20vw", "height": "3vh"},
          {"color": "#6E7D8E", "width": "63vw", "height": "3vh"},
        ],
        [{"color": "#675D5C", "width": "3vw", "height": "2vh"},
          {"color": "#59514F", "width": "12vw", "height": "2vh"},
          {"color": "#43444B", "width": "4vw", "height": "2vh"},
          {"color": "#465666", "width": "35vw", "height": "2vh"},
          {"color": "#667486", "width": "46vw", "height": "2vh"},
        ],
        [{"color": "#635959", "width": "9vw", "height": "3vh"},
          {"color": "#59514F", "width": "30vw", "height": "3vh"},
          {"color": "#465666", "width": "25vw", "height": "3vh"},
          {"color": "#526373", "width": "36vw", "height": "3vh"},
        ],
        [{"color": "#635353", "width": "5vw", "height": "2vh"},
          {"color": "#505053", "width": "7vw", "height": "2vh"},
          {"color": "#2E3339", "width": "7vw", "height": "2vh"},
          {"color": "#59514F", "width": "81vw", "height": "2vh"},
        ],
        [{"color": "#5C5050", "width": "3vw", "height": "4vh"},
          {"color": "#77655E", "width": "20vw", "height": "4vh"},
          {"color": "#836560", "width": "55vw", "height": "4vh"},
          {"color": "#77605A", "width": "32vw", "height": "4vh"},
        ],
        [{"color": "#64524E", "width": "2vw", "height": "1vh"},
          {"color": "#342E2E", "width": "5vw", "height": "1vh"},
          {"color": "#6D5D56", "width": "20vw", "height": "1vh"},
          {"color": "#745356", "width": "40vw", "height": "1vh"},
          {"color": "#575452", "width": "40vw", "height": "1vh"},
        ],
        [{"color": "#232325", "width": "1vw", "height": "7vh"},
          {"color": "#342E2E", "width": "5vw", "height": "7vh"},
          {"color": "#1F2024", "width": "15vw", "height": "7vh"},
          {"color": "#2D3134", "width": "50vw", "height": "7vh"},
          {"color": "#48494D", "width": "29vw", "height": "7vh"},
        ],
        [{"color": "#49433D", "width": "3vw", "height": "4vh"},
          {"color": "#3F3B38", "width": "8vw", "height": "4vh"},
          {"color": "#504645", "width": "60vw", "height": "4vh"},
          {"color": "#645A57", "width": "50vw", "height": "4vh"},
          {"color": "#564E4C", "width": "29vw", "height": "4vh"},
        ],
        [{"color": "#372D2E", "width": "3vw", "height": "5vh"},
          {"color": "#463637", "width": "10vw", "height": "5vh"},
          {"color": "#463434", "width": "15vw", "height": "5vh"},
          {"color": "#443135", "width": "60vw", "height": "5vh"},
          {"color": "#706F79", "width": "12vw", "height": "5vh"},
        ],
        [{"color": "#372D2E", "width": "3vw", "height": "3vh"},
          {"color": "#463637", "width": "10vw", "height": "3vh"},
          {"color": "#463434", "width": "15vw", "height": "3vh"},
          {"color": "#443135", "width": "70vw", "height": "3vh"},
          {"color": "#474143", "width": "2vw", "height": "3vh"},
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
                  <Block key={index + "-" + subIndex} blockNumber={index} blockSubNumber={subIndex} blockColor={subItems.color} blockSecondColor={subItems.color2} blockWidth={subItems.width} blockHeight={subItems.height} blockHover={subItems.hoverColor}/>
                )
              })}
            </div>
          )
        })}
              
      </div>
    );
  
}