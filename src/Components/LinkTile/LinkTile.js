import React, {  useState } from "react";
import Styles from "./LinkTile.css";

import { color } from "@mui/system";
import { Link } from "react-router-dom";



export default function LinkTile({title, image, link})  {
  const [isHovering, setIsHovering] = useState(false);
    return (
        <Link to={link} className="link-tile-link" >
            <img className="link-tile-image" src={image} alt={'image'} style={{color: "#E1C597"}}/>
            <h3>{title}</h3>
        </Link>
    );
  
}