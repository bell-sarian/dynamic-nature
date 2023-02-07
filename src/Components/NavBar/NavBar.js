import React, { Component } from "react";
import Styles from "./NavBar.css";
import GridIcon from "../../Assets/grid_icon.svg";
import GridMenu from "../GridMenu/GridMenu";


export default function NavBar()  {
    return (
      <div className="menu-bar-container">
        <div className="menu-about">
            <div>BSW</div>
        </div>
        <div className="menu-web-name">DYNAMIC NATURE</div>
        {/* <div className="menu-grid-button"> <img src={GridIcon} alt="Grid Icon" /></div> */}
        <GridMenu />
      </div>
    );
  
}