import React, { Component, useState } from "react";
import Styles from "./NavBar.css";
import GridIcon from "../../Assets/grid_icon.svg";
import GridMenu from "../GridMenu/GridMenu";
import { color } from "@mui/system";


export default function NavBar()  {
  const [menuOpen, setMenuOpen] = useState(false);
    return (
      <div 
        className="menu-bar-container" 
        // style={{color: menuOpen ? "#00000080" : "#ffffff80"}}
        >
        <div className="menu-about">
            <div>BSW</div>
        </div>
        <div className="menu-web-name">DYNAMIC NATURE</div>
        
        <GridMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
    );
  
}