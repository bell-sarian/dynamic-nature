import React, { useState } from "react";
import "./Work.css";
import LinkTile from "../../Components/LinkTile/LinkTile";
import WorkLinkData from "../../Assets/data/WorkLink.tsx";
export default function Work() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (React.createElement("div", { className: "work-outer-container" },
        React.createElement("div", { className: "work-container" }, WorkLinkData.map((item, index) => {
            return (React.createElement(LinkTile, { key: index, title: item.title, image: item.image, link: item.link }));
        }))));
}
