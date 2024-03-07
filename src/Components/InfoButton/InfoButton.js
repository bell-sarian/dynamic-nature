import React, { useState } from "react";
// import './Sun.scss';
import InfoIcon from '@mui/icons-material/Info';
export default function InfoButton(props) {
    const [isHovering, setIsHovering] = useState(false);
    // const [timeOfDaySun, setTimeOfDaySun ] = useState(props.sunStyle);
    const handleMouseEnter = () => {
        setIsHovering(true);
    };
    const handleMouseLeave = () => {
        setIsHovering(false);
    };
    const handleClick = () => {
        // setModalOpen(!modalOpen)
    };
    return (React.createElement("div", { className: "info-button-container", onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave },
        React.createElement(InfoIcon, { sx: { color: '#fff' } })));
}
