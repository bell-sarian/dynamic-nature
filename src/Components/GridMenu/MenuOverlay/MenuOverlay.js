import { Opacity } from "@mui/icons-material";
import { color } from "@mui/system";
import React, { Component, useState } from "react";
import { Transition } from "react-transition-group";
import Styles from "./MenuOverlay.css";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import OceanSunset from "../../../Art/OceanSunset/OceanSunset";
// import OceanSunsetPreview from "../../../../Assets/OceanSunsetPreview";
import GridItem from "../GridItem/GridItem";


export default function MenuOverlay({ menuOpen, setMenuOpen})  {

    const stylesOpen = {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex:-1,
        backgroundColor: "#ffffff7f",
        opacity: 50,
        transform: "translateY(0%)",
        transition: "all .2s ease-in-out",
        color: "red"
    }

    const stylesClosed = {
        left: 0,
        width: "100vw",
        height: "100vh",
        position: "absolute",
        transform: "translateY(-1000%)",
        transition: "all .2s ease-in-out",
    }

    const menuItems = ([
        {
            path: "/OceanSunset",
            element: <OceanSunset />,
            imagePreview: null
        },
        {
            path: "/OceanSunset",
            element: <OceanSunset />,
            imagePreview: null
          },
      ]);
    
    return (
      <div 
        className="grid-menu-container"
        style={menuOpen ? stylesOpen : stylesClosed}

        >
        <div className="grid-menu"> 
            <nav
                className="grid-nav-menu"
            >
                {/* <div className="item"></div> */}
                {menuItems.map((item, index) => {
                    <GridItem itemLink={item.path} itemElement={item.element} itemImage={item.imagePreview} />
                })
                    
                }
            </nav>
        </div>
              
      </div>
    );
  
}