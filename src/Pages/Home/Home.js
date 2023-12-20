import React from "react";
import { Link } from 'react-router-dom';
import WorkLinkData from "../../Assets/data/WorkLink";
import LinkTile from "../../Components/LinkTile/LinkTile";
import './Home.scss';
export default function Home() {
    return (React.createElement("div", { className: "home-container" },
        React.createElement("div", { className: "animation-container" },
            React.createElement("div", { className: "shape1" }),
            React.createElement("div", { className: "shape2" }),
            React.createElement("div", { className: "shape3" }),
            React.createElement("div", { className: "shape4" }),
            React.createElement("div", { className: "shape5" }),
            React.createElement("div", { className: "shape6" }),
            React.createElement("div", { className: "shape7" })),
        React.createElement("div", { className: "home-welcome-container" },
            React.createElement("div", { className: "home-welcome-container-preface-text" },
                React.createElement("div", null, "GRAPHICS, UI/UX DESIGN, CREATIVE DIRECTION, AND ENGINEERING BY BSW. THIS WEBSITE IS MADE USING REACT, AND ALL ART IS BASED ON JAVASCRIPT, HTML, AND CSS. PROJECT ORIGIN ORIGIN FEBRUARY 2023. ")),
            React.createElement("div", { className: "home-welcome-container-text" },
                React.createElement("h1", null, "DYNAMIC WEB-BASED ART BY ARTIST BSW IN LOS ANGELES, CA. ALL GRAPHICS ARE ENGINEERED USING ONLY JS/HTML/CSS. ")),
            React.createElement(Link, { to: "/work", className: "home-content-view-more-button" },
                React.createElement("div", null, "Browse Work"))),
        React.createElement("div", { className: "home-content-container2" },
            React.createElement("h1", null, "Recent Work"),
            React.createElement("div", { className: "home-content-container2-links" }, WorkLinkData.map((item, index) => {
                return (React.createElement(LinkTile, { key: index, title: item.title, image: item.image, link: item.link }));
            })),
            React.createElement(Link, { to: "/work", className: "home-content-view-more-button" },
                React.createElement("div", null, "View More")))));
}
