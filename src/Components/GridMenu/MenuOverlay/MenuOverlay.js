import * as React from "react";;
import "./MenuOverlay.scss";
import App from "../../../App";
import About from "../../../Pages/About/About";
import Work from "../../../Pages/Work/Work";
import GridItem from "../GridItem/GridItem";
export default function MenuOverlay({ menuOpen, setMenuOpen }) {
    const stylesOpen = {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -100,
        backgroundColor: "#000000",
        opacity: 50,
        transform: "translateY(0%)",
        transition: "all .9s ease-in-out",
        color: "red"
    };
    const stylesClosed = {
        position: "absolute",
        top: 0,
        left: 0,
        visibility: "hidden",
        opacity: 10,
        width: "100vw",
        height: "100vh",
        transform: "translateY(-100%)",
        transition: "all .9s ease-in-out",
    };
    const menuItems = ([
        {
            name: "HOME",
            path: "/",
            element: React.createElement(App, null),
            // styles: "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(120,120,120,1) 100%)"
        },
        {
            name: "WORK",
            path: "/work",
            element: React.createElement(Work, null),
            // styles: "radial-gradient(circle, rgba(255,81,89,1) 0%, rgba(210,114,123,1) 30%, rgba(110,125,142,1) 100%)"
        },
        {
            name: "ABOUT",
            path: "/about",
            element: React.createElement(About, null),
            // styles: "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(68,9,121,1) 35%, rgba(120,120,120,1) 100%)"
        },
        {
            name: "SERVICES",
            path: "/about",
            element: React.createElement(App, null),
            // styles: "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(68,9,121,1) 35%, rgba(120,120,120,1) 100%)"
        },
        {
            name: "CONTACT",
            path: "/contact",
            element: React.createElement(App, null),
            // styles: "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(68,9,121,1) 35%, rgba(120,120,120,1) 100%)"
        },
    ]);
    return (React.createElement("div", { className: "menu-overlay-container", style: menuOpen ? stylesOpen : stylesClosed, onClick: () => setMenuOpen(false) }, menuItems.map((item, index) => {
        return (React.createElement(GridItem, { key: index, path: item.path, name: item.name, styles: item.styles })
        // <a href={item.path}>{item.name}</a>
        );
    })));
}
