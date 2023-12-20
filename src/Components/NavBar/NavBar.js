import React, { useState, useEffect } from "react";
import "./NavBar.scss";
import BWGF3 from "../../Assets/BW-GF3.svg";
import TANGF3 from "../../Assets/TAN-GF3.svg";
import GridMenu from "../GridMenu/GridMenu";
import MenuOverlay from "../GridMenu/MenuOverlay/MenuOverlay";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [lightContent, setLightContent] = useState(false);
    const location = useLocation();
    const linkStyleLight = "menu-web-link";
    const linkStyleDark = "menu-web-link-dark";
    useEffect(() => {
        console.log(location.pathname);
        if (location.pathname == "/collection1") {
            setLightContent(true);
        }
        else {
            setLightContent(false);
        }
    }, [location]);
    return (React.createElement("div", { className: "menu-bar-container" },
        React.createElement("div", { className: "menu-about" },
            React.createElement(Link, { to: "/", className: "menu-web-name-link" }, lightContent ? React.createElement("img", { src: BWGF3, alt: "GF Cubed Icon", style: { fill: "#E1C597" } }) : React.createElement("img", { src: TANGF3, alt: "GF Cubed Icon", style: { fill: "#E1C597" } }))),
        React.createElement("div", { className: "nav-menu-grid-button" },
            React.createElement(GridMenu, { menuOpen: menuOpen, setMenuOpen: setMenuOpen, dark: lightContent })),
        React.createElement("div", { className: "nav-menu-buttons", style: lightContent ? { color: '#000' } : { color: '#E1C597' } },
            React.createElement(Link, { to: "/work", className: lightContent ? "menu-web-link-dark" : "menu-web-link" },
                React.createElement("div", null, "WORK ")),
            React.createElement(Link, { to: "/about", className: lightContent ? "menu-web-link-dark" : "menu-web-link" },
                React.createElement("div", null, "ABOUT ")),
            React.createElement(Link, { to: "/services", className: lightContent ? "menu-web-link-dark" : "menu-web-link" },
                React.createElement("div", null, "SERVICES ")),
            React.createElement(Link, { to: "/contact", className: lightContent ? "menu-web-link-dark" : "menu-web-link" },
                React.createElement("div", null, "CONTACT "))),
        React.createElement(MenuOverlay, { menuOpen: menuOpen, setMenuOpen: setMenuOpen })));
}
