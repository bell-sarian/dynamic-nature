
import React, { Component, useState } from "react";
import Styles from "./MenuOverlay.css";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import OceanSunset from "../../../Art/OceanSunset/OceanSunset";
import App from "../../../App";
import About from "../../../Pages/About/About";
import Home from "../../../Pages/Home/Home";

import GridItem from "../GridItem/GridItem";


export default function MenuOverlay({ menuOpen, setMenuOpen})  {

    const stylesOpen = {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex:-100,
        backgroundColor: "#0000007f",
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
            name: "HOME",
            path: "/",
            element: <App />,
            styles: "radial-gradient(circle, rgba(255,81,89,1) 0%, rgba(210,114,123,1) 30%, rgba(110,125,142,1) 99%)"
        },
        {  
            name: "OCEAN SUNSET",
            path: "/OceanSunset",
            element: <OceanSunset />,
            styles: "radial-gradient(circle, rgba(255,81,89,1) 0%, rgba(210,114,123,1) 30%, rgba(110,125,142,1) 99%)"
        },
        {
            name: "ABOUT",
            path: "/About",
            element: <About />,
            styles: "radial-gradient(circle, rgba(255,81,89,1) 0%, rgba(210,114,123,1) 30%, rgba(110,125,142,1) 99%)"
          },
      ]);

    
    return (
        <div
            className="grid-menu-container"
            style={menuOpen ? stylesOpen : stylesClosed}
            onClick={() => setMenuOpen(false)} // close menu on select outside of designated buttons
        >

            {menuItems.map((item, index) => {
                return (
                    <GridItem key={index} path={item.path} name={item.name} styles={item.styles}  />
                    // <a href={item.path}>{item.name}</a>
                )
            })}
       
        
              
      </div>
    );
  
}
