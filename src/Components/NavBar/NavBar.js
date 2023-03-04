import React, {  useState } from "react";
import Styles from "./NavBar.scss";
import GridIcon from "../../Assets/grid_icon.svg";
import GridMenu from "../GridMenu/GridMenu";
import MenuOverlay from "../GridMenu/MenuOverlay/MenuOverlay";
import { color } from "@mui/system";
import { Link } from "react-router-dom";


export default function NavBar()  {
  const [menuOpen, setMenuOpen] = useState(false);
    return (
      <div 
        className="menu-bar-container" 
        >
        <div className="menu-about">
            <div>Bell'Aria S.W.</div>
        </div>
        <div className="menu-web-name">
          <Link to="/" className="menu-web-name-link" >DYNAMIC NATURE</Link>
        </div>
        

      <div className="nav-menu-grid-button">
        <GridMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
      <MenuOverlay menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        
      </div>
    );
  
}