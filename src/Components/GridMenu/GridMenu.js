import * as React from "react";;
import "./GridMenu.scss";
import GridIcon from "../../Assets/grid_icon.svg";
import GridIconDark from "../../Assets/grid_icon_dark.svg";
import GridOpenIcon from "../../Assets/grid_open_icon.svg";
export default function GridMenu({ menuOpen, setMenuOpen, dark }) {
    return (React.createElement("div", null,
        React.createElement("div", { className: "grid-menu-container" },
            React.createElement("div", { className: "menu-grid-button", onClick: (e) => {
                    e.preventDefault();
                    setMenuOpen(!menuOpen);
                } }, dark ?
                React.createElement("img", { src: menuOpen ? GridOpenIcon : GridIconDark, alt: "Grid Icon", style: { color: "#E1C597" } })
                :
                    React.createElement("img", { src: menuOpen ? GridOpenIcon : GridIcon, alt: "Grid Icon", style: { color: "#E1C597" } })))));
}
