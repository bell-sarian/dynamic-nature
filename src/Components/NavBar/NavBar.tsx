import React, {  useState, useEffect } from "react";
import Styles from "./NavBar.scss";
import GridIcon from "../../Assets/grid_icon.svg";
import BWGF3 from "../../Assets/BW-GF3.svg";
import TANGF3 from "../../Assets/TAN-GF3.svg";
import GridMenu from "../GridMenu/GridMenu";
import MenuOverlay from "../GridMenu/MenuOverlay/MenuOverlay";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { LockTwoTone } from "@mui/icons-material";



export default function NavBar()  {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightContent, setLightContent] = useState(false);

  const location = useLocation();

  const linkStyleLight = "menu-web-link"
  const linkStyleDark = "menu-web-link-dark"

  useEffect(() => {
    console.log(location.pathname)
      
    if(location.pathname == "/collection1") {
      setLightContent(true)
    }
    else {
      setLightContent(false)
    }
  
  }, [location])

    return (
      <div 
        className="menu-bar-container" 
        >
        <div className="menu-about">
          <Link to="/" className="menu-web-name-link" >
            {lightContent ? <img src={BWGF3} alt="GF Cubed Icon" style={{fill: "#E1C597"}}/> : <img src={TANGF3} alt="GF Cubed Icon" style={{fill: "#E1C597"}}/>}
            
          </Link>
        </div>

        <div className="nav-menu-grid-button">
          <GridMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} dark={lightContent}/>
        </div>

      <div className="nav-menu-buttons" style={ lightContent ? {color: '#000'} : { color: '#E1C597'}}>
        {/*  */}
        <Link to="/work" className={ lightContent ? "menu-web-link-dark" : "menu-web-link"} >
          <div >WORK </div>
        </Link>
        <Link to="/about" className={ lightContent ? "menu-web-link-dark" : "menu-web-link"} >
          <div>ABOUT </div>
        </Link>
        <Link to="/services" className={ lightContent ? "menu-web-link-dark" : "menu-web-link"} >
          <div>SERVICES </div>
        </Link>
        <Link to="/contact" className={ lightContent ? "menu-web-link-dark" : "menu-web-link"} >
          <div>CONTACT </div>
        </Link>
        
      </div>
      <MenuOverlay menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        
      </div>
    );
  
}