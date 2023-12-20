import React, { useState } from "react";
import "./LinkTile.css";
import { Link } from "react-router-dom";
export default function LinkTile({ title, image, link }) {
    const [isHovering, setIsHovering] = useState(false);
    return (React.createElement(Link, { to: link, className: "link-tile-link" },
        React.createElement("img", { className: "link-tile-image", src: image, alt: 'image', style: { color: "#E1C597" } }),
        React.createElement("h3", null, title)));
}
