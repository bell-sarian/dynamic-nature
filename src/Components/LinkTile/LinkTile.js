import React from "react";

import { Link } from "react-router-dom";



export default function LinkTile({title, image, link})  {
    return (
        <Link to={link} className="link-tile-link" >
            <img className="link-tile-image" src={image} alt={'X'} style={{color: "#E1C597"}}/>
            <h3>{title}</h3>
        </Link>
    );
  
}