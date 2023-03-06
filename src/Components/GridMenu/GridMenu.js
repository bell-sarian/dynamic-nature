import React from "react";
import Styles from "./GridMenu.css";
import GridIcon from "../../Assets/grid_icon.svg";
import GridOpenIcon from "../../Assets/grid_open_icon.svg";
import MenuOverlay from "./MenuOverlay/MenuOverlay";


export default function GridMenu({menuOpen, setMenuOpen})  {

    return (
      <div>
        <div className="grid-menu-container">
          <div 
              className="menu-grid-button"
              onClick={(e) => {
                  e.preventDefault();
                  setMenuOpen(!menuOpen);
              }} 
          > 
              <img src={menuOpen ? GridOpenIcon : GridIcon} alt="Grid Icon" style={{color: "#fff"}}/>
          </div>
          
        </div>
        
      </div>
      
    );
  
}