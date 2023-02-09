
import React, { Component, useState } from "react";
import Styles from "./MenuOverlay.css";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import OceanSunset from "../../../Art/OceanSunset/OceanSunset";
import App from "../../../App";
import OceanSunsetPreview from "../../../Assets/OceanSunsetPreview.png";
import GridItem from "../GridItem/GridItem";


export default function MenuOverlay({ menuOpen, setMenuOpen})  {

    const stylesOpen = {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex:-100,
        backgroundColor: "#ffffff7f",
        opacity: 50,
        transform: "translateY(0%)",
        transition: "all .5s ease-in-out",
        color: "red"
    }

    const stylesClosed = {
        visibility: "hidden",
        left: 0,
        top: 0,
        width: "100vw",
        height: "100vh",
        position: "absolute",
        transform: "translateY(-100%)",
        transition: "all .5s ease-in-out",
    }

    const menuItems = ([
        {  
            name: "Home",
            path: "/",
            element: <App />,
            styles: null
        },
        {  
            name: "Ocean Sunset",
            path: "/OceanSunset",
            element: <OceanSunset />,
            styles: "radial-gradient(circle, #FF5159 0%, #FF3E5F 35%, #6E475A 100%)"
        },
        {
            name: "About",
            path: "/About",
            element: <App />,
            styles: null
          },
      ]);

    
    return (
        <div
            className="grid-menu-container"
            style={menuOpen ? stylesOpen : stylesClosed}
        >

            {menuItems.map((item, index) => {
                return (
                    <GridItem key={index} path={item.path} name={item.name} styles={item.styles}  />
                    // <a href={item.path}>{item.name}</a>
                )
            })}
        <div className="overlay-content">
            {/* <a href="/OceanSunset">Ocean Sunset</a> */}

        </div>
        
              
      </div>
    );
  
}
