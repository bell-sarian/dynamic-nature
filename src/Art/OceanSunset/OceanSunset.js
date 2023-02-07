import React, { Component } from "react";
import Styles from "./OceanSunset.css";
import Block from "./Block/Block";

export default function OceanSunset()  {

    const colors = {
        "1-1": {"color": "#764F62", "width": "100vw", "height": "2vw"},
        "2-1": {"color": "#6E475A", "width": "100vw", "height": "4vw"},
        "3-1": {"color": "#6A4356", "width": "100vw", "height": "3vw"},
        "4-1": {"color": "#634456", "width": "100vw", "height": "3vw"},
        "5-1": {"color": "#60445A", "width": "100vw", "height": "5vw"},
        "6-1": {"color": "#60445A", "width": "100vw", "height": "5vw"},
    }

    const renderBlock = () => {
      let blocks = [];

      for (let i = 0; i < colors.length() ; i++) {
        break;
      }
    }
    return (
      <div className="ocean-sunset-container">
        {/* <Block blockColor={colors["1-1"]} blockWidth={"100vw"} blockHeight={"2vw"} /> */}
        <Block blockColor={colors["1-1"]["color"]} blockWidth={colors["1-1"]["width"]} blockHeight={colors["1-1"]["height"]} />
        <Block blockColor={colors["2-1"]["color"]} blockWidth={colors["2-1"]["width"]} blockHeight={colors["2-1"]["height"]} />
        <Block blockColor={colors["3-1"]["color"]} blockWidth={colors["3-1"]["width"]} blockHeight={colors["3-1"]["height"]} />
        <Block blockColor={colors["4-1"]["color"]} blockWidth={colors["4-1"]["width"]} blockHeight={colors["4-1"]["height"]} />
        <Block blockColor={colors["5-1"]["color"]} blockWidth={colors["5-1"]["width"]} blockHeight={colors["5-1"]["height"]} />
        <Block blockColor={colors["6-1"]["color"]} blockWidth={colors["6-1"]["width"]} blockHeight={colors["6-1"]["height"]} />
        
      </div>
    );
  
}