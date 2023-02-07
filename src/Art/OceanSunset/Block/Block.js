import React, { Component } from "react";
// import Styles from "./OceanSunset.css";


export default function Block(props)  {

  
  return (
      <div className="block" style={{backgroundColor: props.blockColor, height: props.blockHeight, width: props.blockWidth, zIndex: 9999 }}></div>
  );
  
}

