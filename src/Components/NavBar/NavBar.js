import React, {  useState } from "react";
import Styles from "./NavBar.scss";
import GridIcon from "../../Assets/grid_icon.svg";
import BWGF3 from "../../Assets/BW-GF3.svg";
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
        <Link to="/" className="menu-web-name-link" >
        <img src={BWGF3} alt="GF Cubed Icon" style={{color: "#E1C597"}}/>
        </Link>
        </div>
        {/* <div className="menu-web-name">
          <Link to="/" className="menu-web-name-link" >DYNAMIC NATURE</Link>
        </div> */}
        

      <div className="nav-menu-grid-button">
        {/* <GridMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> */}
        <Link to="/work" className="menu-web-link" >
          <div>Work </div>
        </Link>
        <Link to="/about" className="menu-web-link" >
          <div>About </div>
        </Link>
        <Link to="/services" className="menu-web-link" >
          <div>Services </div>
        </Link>
        <Link to="/contact" className="menu-web-link" >
          <div>Contact </div>
        </Link>
        
      </div>
      <MenuOverlay menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        
      </div>
    );
  
}