import React, { Component } from "react";
import Styles from "./OceanSunset.css";
import Block from "./Block/Block";

export default function OceanSunset()  {

    const colors = [
        [{"color": "#764F62", "width": "100vw", "height": "2vw"}],
        [{"color": "#6E475A", "width": "100vw", "height": "4vw"}],
        [{"color": "#6A4356", "width": "100vw", "height": "3vw"}],
        [{"color": "#634456", "width": "100vw", "height": "3vw"}],
        [{"color": "#60445A", "width": "100vw", "height": "5vw"}],
        [{"color": "#54475B", "width": "100vw", "height": "2vw"}],
        [{"color": "#4D4D5F", "width": "100vw", "height": "4vw"}],
        [{"color": "#454E5D", "width": "100vw", "height": "5vw"}],
        [{"color": "#70646A", "width": "100vw", "height": "1vw"}],
        [{"color": "#866B6A", "width": "100vw", "height": "2vw"}],
        [{"color": "#52504E", "width": "3vw", "height": "2vw"},
          {"color": "#4B5052", "width": "9vw", "height": "2vw"},
          {"color": "#2D3238", "width": "5vw", "height": "2vw"},
          {"color": "#5C6D81", "width": "20vw", "height": "2vw"},
          {"color": "#6E7D8E", "width": "63vw", "height": "2vw"},
        ],
        [{"color": "#675D5C", "width": "3vw", "height": "1vw"},
          {"color": "#59514F", "width": "12vw", "height": "1vw"},
          {"color": "#43444B", "width": "4vw", "height": "1vw"},
          {"color": "#465666", "width": "35vw", "height": "1vw"},
          {"color": "#667486", "width": "46vw", "height": "1vw"},
        ],
        [{"color": "#635959", "width": "9vw", "height": "2vw"},
          {"color": "#59514F", "width": "30vw", "height": "2vw"},
          {"color": "#465666", "width": "25vw", "height": "2vw"},
          {"color": "#526373", "width": "36vw", "height": "2vw"},
        ],
        
    ]

    
    return (
      <div className="ocean-sunset-container">
        
        {colors.map((items, index) => {
          
          return (
            <div className="row-container">
              {items.map((subItems, subIndex) => {

                return (
                  <Block blockColor={subItems.color} blockWidth={subItems.width} blockHeight={subItems.height} blockHover={subItems.hoverColor}/>
                )
              })}
            </div>
          )
        })}
              
      </div>
    );
  
}