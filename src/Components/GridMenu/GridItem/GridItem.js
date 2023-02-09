import React, { Component, useState } from "react";
import styles from "./GridItem.css";
import { Link } from "react-router-dom";

export default function GridItem(props)  {
    
    return (
      <div className="grid-item-container" style={{ backgroundImage: props.styles}} >


        <a href={props.path}>
            
            {props.name}
        </a>
            
      </div>
    );
  
}