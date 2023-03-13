import React from "react";
import { Link } from "react-router-dom";

export default function GridItem(props)  {

  const handleClick = (myLink) => () => {
    window.location.href=myLink;
  }
    
    return (
      <Link className="grid-item-container" to={props.path} onClick={() => handleClick(props.path)} style={{ backgroundImage: props.styles}} >


        <div className="link-text" href={props.path}>
            
            {props.name}
        </div>
            
      </Link>
    );
  
}