import React, { Component, useState } from "react";
import styles from "./GridItem.css";


export default function GridItem({name})  {

    return (
      <div className="grid-item-container">
        {name}
        {console.log("react inside grid item")}
        {/* <img src={props.itemImage} alt="Grid Icon" /> */}
      </div>
    );
  
}